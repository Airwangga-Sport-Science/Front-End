import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormLanding from './FormLanding';

describe('FormLanding Component', () => {
  beforeEach(() => {
    render(<FormLanding />);
  });

  it('renders title correctly', () => {
    const titleElement = screen.getByText('This is Landing Template', { selector: '#Title' });
    expect(titleElement).toBeInTheDocument();
  });

  it('renders description correctly', () => {
    const descriptionElement = screen.getByText(
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt ipsam sequi maxime quae praesentium ipsa ab unde consectetur cum laborum minima vitae sint commodi non ipsum, magni aspernatur veritatis dolore?',
      { selector: '#Description' }
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
