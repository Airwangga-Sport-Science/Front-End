import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from './page';

jest.mock('@/utils/api', () => ({
  getUsers: jest.fn().mockResolvedValue([

    {
      "email": "player@gmail.com",
      "id": 18,
      "name": "player satu",
      "password": "$2b$12$F3iGZF3beEiLUwXgO52DlOWtAuVSMX68Ijablzr2ifJXTdVkFSz.2",
      "phone": "085664760899",
      "role": 1,
      "status": 1,
      "username": "player"
    },

  ]),
}));

describe('Page Component', () => {
  it('renders the Page component correctly', async () => {
    render(<Page />);
    

    expect(screen.getByText('User Tables')).toBeInTheDocument();


    await waitFor(() => {
      expect(screen.getByText('player satu')).toBeInTheDocument();
      expect(screen.getByText('player')).toBeInTheDocument();
      expect(screen.getByText('085664760899')).toBeInTheDocument();
      expect(screen.getByText('player@gmail.com')).toBeInTheDocument();
    });

  });

});
