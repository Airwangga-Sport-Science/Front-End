import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Training from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getArticles: jest.fn(),
  getPositions: jest.fn(),
}));

describe('Training Component', () => {
  beforeEach(() => {

    api.getArticles.mockClear();
    api.getPositions.mockClear();
  });

  it('renders the Training component and loads articles and positions', async () => {

    const mockedArticles = [{ id: 1, title: 'Article 1', positions: ['Position 1', 'Position 2'] }];
    const mockedPositions = [{ id: 1, name: 'Position 1' }, { id: 2, name: 'Position 2' }];


    api.getArticles.mockResolvedValue(mockedArticles);
    api.getPositions.mockResolvedValue(mockedPositions);

    render(<Training />);



    await waitFor(() => {
      expect(api.getArticles).toHaveBeenCalledTimes(1);
      expect(api.getPositions).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByText('Training Catalogue')).toBeInTheDocument();
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Position 1')).toBeInTheDocument();

  });

  it('handles search functionality', async () => {

    const mockedArticles = [
      { id: 1, title: 'Article 1', positions: ['Position 1'] },
      { id: 2, title: 'Article 2', positions: ['Position 2'] },
    ];
    const mockedPositions = [{ id: 1, name: 'Position 1' }, { id: 2, name: 'Position 2' }];

    api.getArticles.mockResolvedValue(mockedArticles);
    api.getPositions.mockResolvedValue(mockedPositions);

    render(<Training />);


    await waitFor(() => {
      expect(api.getArticles).toHaveBeenCalledTimes(1);
      expect(api.getPositions).toHaveBeenCalledTimes(1);
    });


    fireEvent.change(screen.getByPlaceholderText('Search Catologue'), { target: { value: 'Article 1' } });

    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.queryByText('Article 2')).not.toBeInTheDocument();

  });

});
