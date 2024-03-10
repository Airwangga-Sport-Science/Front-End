import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormSlider from './FormSlider';

describe('FormSlider Component', () => {
  const mockAttribute = 'testAttribute';
  const mockQuestion = 'Test question';
  const mockDisplay = 'Testdisplay';
  const mockValue = 50; // Example initial value
  const mockOnAttributeChange = jest.fn(); // Mocking the onAttributeChange function

  beforeEach(() => {
    render(
      <FormSlider
        attribute={mockAttribute}
        question={mockQuestion}
        display={mockDisplay}
        value={mockValue}
        onAttributeChange={mockOnAttributeChange}
      />
    );
  });

  it('renders question and display correctly', () => {
    const questionElement = screen.getByText(mockQuestion);
    expect(questionElement).toBeInTheDocument();
  });

  it('renders slider correctly', () => {
    const sliderElement = screen.getAllByLabelText(mockDisplay)[0];
    expect(sliderElement).toBeInTheDocument();
  });

  it('calls onAttributeChange when slider value changes', () => {
    const newValue = 75; // Example new value
    fireEvent.change(screen.getByRole('slider'), { target: { value: newValue } });
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
    expect(mockOnAttributeChange).toHaveBeenCalledWith(mockAttribute, newValue);
  });

  it('increases value when add button is clicked', () => {
    const addBtn = screen.getByText('+');
    fireEvent.click(addBtn);
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
    expect(mockOnAttributeChange).toHaveBeenCalledWith(mockAttribute, mockValue + 1);
  });

  it('decreases value when minus button is clicked', () => {
    const minusBtn = screen.getByText('-');
    fireEvent.click(minusBtn);
    expect(mockOnAttributeChange).toHaveBeenCalledTimes(1);
    expect(mockOnAttributeChange).toHaveBeenCalledWith(mockAttribute, mockValue - 1);
  });
});
