import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormLanding from './FormLanding';

describe('FormLanding Component', () => {
  beforeEach(() => {
    render(<FormLanding />);
  });

  it('renders title correctly', () => {
    const titleElement = screen.getByText('Attention!', { selector: '#Title' });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    const descriptionElement = screen.getByText(
      /Mohon perhatian bahwa pengisian data pada formulir/i
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
