import { render, screen } from '@testing-library/react';
import Home from './page';
import '@testing-library/jest-dom';
describe('Home Component', () => {
  test('renders heading text', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Scoutition AI/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders "Get Started" button', () => {
    render(<Home />);
    const buttonElement = screen.getByText(/Get Started/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders team members section', () => {
    render(<Home />);
    const teamSectionElement = screen.getByText(/Here are our team/i);
    expect(teamSectionElement).toBeInTheDocument();
  });

  test('renders social media buttons', () => {
    render(<Home />);
    const footer = screen.getByText(/Copyright © 2024 Airwangga Technosport Science Group/i);
    expect(footer).toBeInTheDocument();
  });
});
