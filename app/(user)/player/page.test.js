import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Index from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getPlayer: jest.fn(),
}));

describe('Index Component', () => {
  beforeEach(() => {

    api.getPlayer.mockClear();
  });

  it('renders the Index component and loads player data', async () => {

    const mockedPlayer = { /* mock player data */ };
    const mockedAttribute = { /* mock attribute data */ };


    api.getPlayer.mockResolvedValue({ player: mockedPlayer, attribute: mockedAttribute });

    render(<Index />);


    expect(screen.getByText('Loading...')).toBeInTheDocument();


    await waitFor(() => {
      expect(api.getPlayer).toHaveBeenCalled();
    });


    expect(screen.getByText('Player Name')).toBeInTheDocument();
    expect(screen.getByText('Player Position')).toBeInTheDocument();

  });

});
