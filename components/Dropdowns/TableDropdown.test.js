import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing @testing-library/jest-dom for extended DOM assertions
import TableDropdown from './TableDropdown';

describe('TableDropdown Component', () => {
  const handleOpenModal = jest.fn();
  const id = 1;

  beforeEach(() => {
    render(
      <TableDropdown
        handleOpenModal={handleOpenModal}
        id={id}
      />
    );
  });

  it('renders TableDropdown component with Action button', () => {
    expect(screen.getByText('Action')).toBeInTheDocument();
  });

  it('opens dropdown menu when Action button is clicked', () => {
    const actionButton = screen.getByText('Action');
    fireEvent.click(actionButton);

    
  });

  it('calls handleOpenModal function when Update option is clicked', () => {
    const actionButton = screen.getByText('Action');
    fireEvent.click(actionButton);

    const updateOption = screen.getByText('Update');
    fireEvent.click(updateOption);

    expect(handleOpenModal).toHaveBeenCalledWith(id);
  });

  it('closes dropdown menu when an option is clicked', () => {
    const actionButton = screen.getByText('Action');
    fireEvent.click(actionButton);

    const updateOption = screen.getByText('Update');
    fireEvent.click(updateOption);

    expect(screen.queryByTestId('dropdownDivider')).not.toBeInTheDocument();
  });
});
