import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import csurf from "csurf";

/**
 * Registers all API routes and security middleware for the Express application
 * 
 * @param {Express} app - The Express application
 * @returns {Promise<Server>} The HTTP server instance
 */
export async function registerRoutes(app: Express): Promise<Server> {
  // Setup CSRF protection
  const csrfProtection = csurf({
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    }
  });
  
  // Apply CSRF protection to all POST, PUT, PATCH, DELETE routes
  app.use((req, res, next) => {
    // Skip CSRF for GET/HEAD methods that shouldn't change state
    if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      return next();
    }
    // Apply CSRF protection to state-changing methods
    return csrfProtection(req, res, next);
  });
  
  // Return CSRF token to client
  app.get('/api/csrf-token', csrfProtection, (req, res) => {
    res.json({ csrfToken: req.csrfToken() });
  });
  
  // Error handler for CSRF errors
  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err.code === 'EBADCSRFTOKEN') {
      // Handle CSRF token errors
      return res.status(403).json({
        error: 'Invalid or missing CSRF token. Please refresh the page and try again.'
      });
    }
    
    // Pass other errors to the default error handler
    next(err);
  });
  
  // Add API routes here
  // Use storage to perform CRUD operations
  
  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
