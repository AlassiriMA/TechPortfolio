/**
 * Global test setup for Vitest
 * This file configures the testing environment for React components
 */
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});