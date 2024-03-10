import React from 'react';
import { render, screen } from '@testing-library/react';
import TableTrainingModal from './TableTrainingModal';
import '@testing-library/jest-dom';
import api from '@/utils/api';

// Mocking fungsi getArticleByAttribute
jest.mock('@/utils/api', () => ({
  getArticleByAttribute: jest.fn().mockResolvedValue([
    {
      id: '1',
      article_title: 'Test Article Title 1',
      article_body: 'Test Article Body 1',
      article_positions: 'Test Article Positions 1',
      player_status: true, // Sudah Diambil
      article_id: '456', // Contoh ID Artikel
    },
    {
      id: '2',
      article_title: 'Test Article Title 2',
      article_body: 'Test Article Body 2',
      article_positions: 'Test Article Positions 2',
      player_status: false, // Belum Diambil
      article_id: '789', // Contoh ID Artikel
    },
  ]),
}));


describe('TableTrainingModal Component', () => {
  const activeAttribute = {
    id: '123', // Contoh ID aktif
  };

  it('renders TableTrainingModal component with provided articles', () => {
    render(
      <TableTrainingModal
        isOpen={true}
        closeModal={() => {}}
        activeAttribute={activeAttribute}
      />
    );

    // Verifikasi judul training
    expect(screen.getByText('Training Table')).toBeInTheDocument();
  });
});
