import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardStatsSelector from './CardStatsSelector';
import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn()
  })
}));

describe('CardStatsSelector Component', () => {
  const attribute = [
    { id: 1, created_date: '2022-01-01' },
    { id: 2, created_date: '2022-02-01' }
  ];

  const setActiveAttribute = jest.fn();

  it('renders CardStatsSelector component with provided props', () => {
    render(
      <CardStatsSelector
        attribute={attribute}
        activeAttribute={{ id: 1 }}
        setActiveAttribute={setActiveAttribute}
      />
    );

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    attribute.forEach(attr => {
      const option = screen.getByText(attr.created_date);
      expect(option).toBeInTheDocument();
    });

    const newRecommendationButton = screen.getByText('New Recommendation');
    expect(newRecommendationButton).toBeInTheDocument();
  });

  it('calls setActiveAttribute with the correct attribute when an option is selected', () => {
    render(
      <CardStatsSelector
        attribute={attribute}
        activeAttribute={{ id: 1 }}
        setActiveAttribute={setActiveAttribute}
      />
    );

    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '2' } });

    expect(setActiveAttribute).toHaveBeenCalledWith(attribute[1]);
  });

  it('calls useRouter.push when "New Recommendation" button is clicked', () => {
    render(
      <CardStatsSelector
        attribute={attribute}
        activeAttribute={{ id: 1 }}
        setActiveAttribute={setActiveAttribute}
      />
    );

    const newRecommendationButton = screen.getByText('New Recommendation');
    fireEvent.click(newRecommendationButton);
  });


});
