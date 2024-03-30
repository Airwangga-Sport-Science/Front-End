import { render, screen, fireEvent } from '@testing-library/react';
import BadgePositions from './BadgePositions';
import '@testing-library/jest-dom';
describe('BadgePositions Component', () => {
  test('renders name correctly', () => {
    const testName = 'Goalkeeper';
    render(<BadgePositions name={testName} />);
    const nameElement = screen.getByText(testName);
    expect(nameElement).toBeInTheDocument();
  });
});
