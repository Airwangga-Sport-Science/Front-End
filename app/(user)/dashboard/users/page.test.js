import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from './page';

jest.mock('../../../../utils/api', () => ({
  getUsers: jest.fn().mockResolvedValue([

    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },

  ]),
}));

describe('Page Component', () => {
  it('renders the Page component correctly', async () => {
    render(<Page />);
    

    expect(screen.getByText('Training Table')).toBeInTheDocument();


    await waitFor(() => {
      expect(screen.getByText('User 1')).toBeInTheDocument();
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });

  });

});
