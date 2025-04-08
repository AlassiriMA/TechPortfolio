import { QueryClient, QueryFunction } from "@tanstack/react-query";
import { sanitizeObject } from "./utils";

/**
 * Static site version of query client utilities
 * Modified to work without a backend API
 */

/**
 * Simulates an API response for a static site
 * 
 * @param {string} dataType - The type of data being requested
 * @returns {Promise<any>} A promise resolving to static data
 */
async function getStaticData(dataType: string): Promise<any> {
  // For static sites, return predefined data instead of making API calls
  // In a real scenario, you might have JSON files in the public folder
  
  // Simulate network delay for a more realistic experience
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return empty data - in a real implementation you would include your static data here
  return {};
}

/**
 * Static version of API request that doesn't perform actual network requests
 * Can be used for maintaining API structure in components while being static-site friendly
 * 
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {string} dataType - The type of data being requested 
 * @param {unknown} [data] - Optional data included with the request
 * @returns {Promise<any>} A promise resolving to static data
 */
export async function apiRequest(
  method: string,
  dataType: string,
  data?: unknown | undefined,
): Promise<any> {
  if (method === "GET") {
    return getStaticData(dataType);
  }
  
  // For POST/PUT/etc. methods, log to console and simulate success
  console.log(`Static site: ${method} request to ${dataType} with data:`, data);
  
  // For form submissions, you could trigger mailto links or other client-side actions here
  
  return { success: true };
}

/**
 * Type definition for how to handle request errors
 */
type ErrorBehavior = "returnNull" | "throw";

/**
 * Creates a static query function for TanStack Query
 * Returns static data rather than making API requests
 * 
 * @param {Object} options - Configuration options
 * @param {ErrorBehavior} options.on401 - How to handle errors (maintained for API compatibility)
 * @returns {QueryFunction<T>} A query function for use with useQuery
 */
export const getQueryFn: <T>(options: {
  on401: ErrorBehavior;
}) => QueryFunction<T> =
  () =>
  async ({ queryKey }) => {
    // Extract data type from the query key
    const dataType = queryKey[0] as string;
    
    // Return static data for this data type
    const result = await getStaticData(dataType);
    return result as unknown as T;
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
