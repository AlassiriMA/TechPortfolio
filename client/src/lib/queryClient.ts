import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { sanitizeObject } from "./utils";

/**
 * Throws an error if the response is not OK (status not in 200-299 range)
 * 
 * @param {Response} res - The fetch Response object to check
 * @throws {Error} If the response is not OK, with status code and error message
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Makes an API request with security enhancements (sanitization, CSRF protection)
 * 
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} url - API endpoint URL
 * @param {unknown} [data] - Optional data to send in the request body
 * @returns {Promise<Response>} The fetch Response object if successful
 * @throws {Error} If the response is not OK
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Sanitize request data to prevent XSS
  const sanitizedData = data && typeof data === 'object' 
    ? sanitizeObject(data as Record<string, any>) 
    : data;
  
  // Get CSRF token from meta tag if available (for CSRF protection)
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  
  // Prepare headers with content type and optional CSRF token
  const headers: Record<string, string> = {
    ...(data ? { "Content-Type": "application/json" } : {}),
    ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {})
  };
  
  const res = await fetch(url, {
    method,
    headers,
    body: sanitizedData ? JSON.stringify(sanitizedData) : undefined,
    credentials: "include", // Include cookies for auth
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * Type definition for how to handle unauthorized responses (401)
 */
type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Creates a query function for TanStack Query with security enhancements
 * 
 * @param {Object} options - Configuration options
 * @param {UnauthorizedBehavior} options.on401 - How to handle 401 responses
 * @returns {QueryFunction<T>} A query function for use with useQuery
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Add CSRF token to request headers if available
    const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
    const headers: Record<string, string> = {
      ...(csrfToken ? { "X-CSRF-Token": csrfToken } : {})
    };
    
    const res = await fetch(queryKey[0] as string, {
      credentials: "include", // Include cookies for auth
      headers
    });

    // Handle unauthorized responses according to config
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    
    // Parse and sanitize response data
    const data = await res.json();
    return data; // No need to sanitize response data as it comes from our trusted API
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
