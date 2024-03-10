import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TrainingModal from './TrainingModal';
import '@testing-library/jest-dom';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getPositions: jest.fn().mockResolvedValue([
    { id: 1, name: 'Position 1' },
    { id: 2, name: 'Position 2' },
    { id: 3, name: 'Position 3' },
  ]),
  getArticle: jest.fn().mockResolvedValue({
    id: '1',
    title: 'Test Article',
    position_1: 'Position 1',
    position_2: 'Position 2',
    position_3: 'Position 3',
    body: 'Test Body',
    steps: 'Step 1, Step 2, Step 3',
    thumbnail: 'test-thumbnail.jpg',
  }),
}));

describe('TrainingModal Component', () => {
  const handleCloseModal = jest.fn();
  const handleDataChange = jest.fn();

  beforeEach(() => {
    render(
      <TrainingModal
        isOpen={true}
        closeModal={handleCloseModal}
        handleDataChange={handleDataChange}
      />
    );
  });

  it('renders TrainingModal component with form fields', async () => {
    expect(screen.getByText('Add Training')).toBeInTheDocument();
    expect(screen.getByLabelText('Training Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Description')).toBeInTheDocument();
    expect(screen.getByLabelText('Steps (For Numerical Order Divide By Comma)')).toBeInTheDocument();
    expect(screen.getByLabelText('Gambar')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument();

  });
});