import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing @testing-library/jest-dom for extended DOM assertions
import CardTable from './CardTable';

describe('CardTable Component', () => {
  const articles = [
    { id: 1, name: 'Training 1', position: 'Position 1', shortDesc: 'Description 1' },
    { id: 2, name: 'Training 2', position: 'Position 2', shortDesc: 'Description 2' }
  ];

  const openModalTraining = jest.fn();
  const handleOpenModal = jest.fn();

  it('renders CardTable component with provided props', () => {
    render(
      <CardTable
        articles={articles}
        openModalTraining={openModalTraining}
        handleOpenModal={handleOpenModal}
      />
    );

    expect(screen.getByText('Training Tables')).toBeInTheDocument();
    expect(screen.getByText('Create Training')).toBeInTheDocument();

    
  });

  it('calls openModalTraining function when "Create Training" button is clicked', () => {
    render(
      <CardTable
        articles={articles}
        openModalTraining={openModalTraining}
        handleOpenModal={handleOpenModal}
      />
    );

    const createTrainingButton = screen.getByText('Create Training');
    createTrainingButton.click();

    expect(openModalTraining).toHaveBeenCalled();
  });

  
});
