import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

/**
 * Initialize the Express application with security-focused middleware
 */
const app = express();

// Body parsers with size limits to prevent DoS attacks
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Set security headers for all responses
app.use((req, res, next) => {
  // Prevent clickjacking attacks
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  
  // Help prevent XSS attacks by restricting browser from running scripts
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Control referrer information
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // In production, set strict CSP headers
  if (process.env.NODE_ENV === 'production') {
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;"
    );
  }
  
  next();
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  /**
   * Global error handler with security considerations
   * 
   * - Sanitizes error messages to prevent information disclosure
   * - Logs errors for debugging while keeping sensitive info out of responses
   * - Returns appropriate status codes with safe error messages
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    
    // Create a sanitized error message that doesn't leak sensitive information
    let safeMessage: string;
    
    if (status === 401) {
      safeMessage = "Authentication required";
    } else if (status === 403) {
      safeMessage = "You don't have permission to access this resource";
    } else if (status === 404) {
      safeMessage = "The requested resource was not found";
    } else if (status === 400) {
      // For validation errors, we can return the validation message
      safeMessage = err.message || "Invalid request parameters";
    } else if (status >= 500) {
      // For server errors, don't expose error details to client
      safeMessage = "An unexpected error occurred";
      
      // Log the actual error for debugging (but not in the response)
      console.error(`Server error: ${err.message || "Unknown error"}`, err.stack);
    } else {
      safeMessage = err.message || "An error occurred";
    }

    // Return a JSON response with appropriate status code and safe message
    res.status(status).json({ 
      error: {
        status,
        message: safeMessage
      }
    });
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
