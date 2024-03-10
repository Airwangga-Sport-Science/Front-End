import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormQuestion from './FormQuestion';

describe('FormQuestion Component', () => {
  const mockAttribute = 'testAttribute';
  const mockQuestion = 'Test question';
  const mockDisplay = 'Test display';
  const mockType = 'text';
  const mockValue = 'Initial value';
  const mockOnAttributeChange = jest.fn(); // Mocking the onAttributeChange function

  beforeEach(() => {
    render(
      <FormQuestion
        attribute={mockAttribute}
        question={mockQuestion}
        display={mockDisplay}
        value={mockValue}
        type={mockType}
        onAttributeChange={mockOnAttributeChange}
      />
    );
  });

  it('renders question and display correctly', () => {
    const questionElement = screen.getByText(mockQuestion);
    const displayElement = screen.getByText(mockDisplay);
    expect(questionElement).toBeInTheDocument();
    expect(displayElement).toBeInTheDocument();
  });

  it('renders input with initial value correctly', () => {
    const inputElement = screen.getByDisplayValue(mockValue);
    expect(inputElement).toBeInTheDocument();
  });

  it('calls onAttributeChange when input value changes', () => {
    const newValue = 'New value';
    const inputElement = screen.getByDisplayValue(mockValue);
    fireEvent.change(inputElement, { target: { value: newValue } });
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
    expect(mockOnAttributeChange).toHaveBeenCalledWith(mockAttribute, newValue);
  });
});
