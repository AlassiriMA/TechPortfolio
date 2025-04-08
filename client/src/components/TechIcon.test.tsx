/**
 * Unit tests for the TechIcon component
 * 
 * Tests cover rendering, accessibility features, and interactive behaviors
 */
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import TechIcon from './TechIcon';

describe('TechIcon Component', () => {
  it('renders the technology name correctly', () => {
    renderWithProviders(
      <TechIcon
        name="React"
        icon="ri-reactjs-fill"
        color="#61DAFB"
      />
    );
    
    expect(screen.getByText('React')).toBeInTheDocument();
  });
  
  it('applies the correct icon class', () => {
    renderWithProviders(
      <TechIcon
        name="React"
        icon="ri-reactjs-fill"
        color="#61DAFB"
      />
    );
    
    const icon = document.querySelector('.ri-reactjs-fill');
    expect(icon).toBeInTheDocument();
  });
  
  it('renders as a link when URL is provided', () => {
    const testUrl = 'https://reactjs.org';
    
    renderWithProviders(
      <TechIcon
        name="React"
        icon="ri-reactjs-fill"
        color="#61DAFB"
        url={testUrl}
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', testUrl);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
  
  it('includes accessibility attributes', () => {
    const description = "Building modern UIs with React";
    
    renderWithProviders(
      <TechIcon
        name="React"
        icon="ri-reactjs-fill"
        color="#61DAFB"
        description={description}
      />
    );
    
    // Check if non-link version has the correct role and aria-label
    const techIcon = screen.getByRole('img');
    expect(techIcon).toHaveAttribute('aria-label', `React technology - ${description}`);
  });
});