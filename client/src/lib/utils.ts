import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Sanitizes a string to prevent XSS attacks by escaping HTML special characters
 * 
 * @param {string} input - The input string to sanitize
 * @returns {string} The sanitized string with HTML special characters escaped
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Validates and sanitizes an object's string properties
 * 
 * @param {Record<string, any>} obj - The object to validate and sanitize
 * @returns {Record<string, any>} A new object with sanitized string values
 */
export function sanitizeObject(obj: Record<string, any>): Record<string, any> {
  // Create a new object to avoid mutating the original
  const sanitized: Record<string, any> = {};
  
  // Process each property
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      
      if (typeof value === 'string') {
        // Sanitize string values
        sanitized[key] = sanitizeInput(value);
      } else if (typeof value === 'object' && value !== null) {
        // Recursively sanitize nested objects
        sanitized[key] = sanitizeObject(value);
      } else {
        // Keep other types as is
        sanitized[key] = value;
      }
    }
  }
  
  return sanitized;
}
