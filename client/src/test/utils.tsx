/**
 * Test utility functions for rendering components and providing test context
 */
import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/**
 * Creates a new QueryClient for testing purposes
 * 
 * @returns A new QueryClient with default test configuration
 */
export const createTestQueryClient = () => new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

/**
 * Custom render function that wraps components with necessary providers for testing
 * 
 * @param ui - The React component to render
 * @param options - Additional render options
 * @returns The rendered component with additional testing utilities
 */
export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  const testQueryClient = createTestQueryClient();
  
  function AllProviders({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    );
  }
  
  return render(ui, { wrapper: AllProviders, ...options });
}