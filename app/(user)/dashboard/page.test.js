import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getArticles: jest.fn(),
}));

describe('Page Component', () => {
  beforeEach(() => {
    
    api.getArticles.mockClear();
  });

  it('renders the Page component and loads articles', async () => {
    
    const mockArticles = [
      { id: 1, title: 'Article 1' },
      { id: 2, title: 'Article 2' },
    ];

    
    api.getArticles.mockResolvedValue(mockArticles);

    render(<Page />);


    expect(screen.getByText('Training Tables')).toBeInTheDocument();


    await waitFor(() => {
      expect(api.getArticles).toHaveBeenCalled();
    });

    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
  });

});
