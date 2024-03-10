import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormRadio from './FormRadio';

describe('FormRadio Component', () => {
  const mockAttribute = 'testAttribute';
  const mockQuestion = 'Test question';
  const mockDisplay = 'Test display';
  const mockValue = 'Option 1';
  const mockOptions = [
    { label: 'Option 1', value: 'Option 1' },
    { label: 'Option 2', value: 'Option 2' },
    { label: 'Option 3', value: 'Option 3' },
  ];
  const mockOnAttributeChange = jest.fn(); // Mocking the onAttributeChange function

  beforeEach(() => {
    render(
      <FormRadio
        attribute={mockAttribute}
        question={mockQuestion}
        display={mockDisplay}
        value={mockValue}
        options={mockOptions}
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

  it('renders radio options correctly', () => {
    const radioButtons = screen.getAllByRole('radio');
    expect(radioButtons).toHaveLength(mockOptions.length);
    expect(radioButtons[0]).toHaveAttribute('value', mockOptions[0].value);
    expect(radioButtons[1]).toHaveAttribute('value', mockOptions[1].value);
    expect(radioButtons[2]).toHaveAttribute('value', mockOptions[2].value);
  });

  it('calls onAttributeChange when radio option changes', () => {
    const newValue = 'Option 2';
    const radioOption = screen.getByLabelText('Option 2');
    fireEvent.click(radioOption);
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
    expect(mockOnAttributeChange).toHaveBeenCalledWith(mockAttribute, newValue);
  });
});
