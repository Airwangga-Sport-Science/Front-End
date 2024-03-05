import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from './page';


jest.mock('@/utils/api', () => ({
  getArticles: jest.fn().mockResolvedValue([

    {
      body: "Modified Update test",
      create_date: "Mon, 19 Feb 2024 00:00:00 GMT",
      deleted: 1,
      id: 2, // Assuming a new ID
      positions: "LM,RM",
      steps: "Passing drills, Shooting practice",
      thumbnail: null,
      title: "Advanced Wing Training",
      user_id: 3, // Assuming a new user ID
      user_name: "Modified User"
  },

  ]),
  getPositions: jest.fn().mockResolvedValue([
    {
      "id": 1,
      "name": "RWB"
    },
    {
      "id": 2,
      "name": "LWB"
    },
  ])
}));

describe('Page Component', () => {
  it('renders the Page component and loads articles', async () => {
    

    render (<Page />);

    expect(screen.getByText('Training Tables')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Advanced Wing Training')).toBeInTheDocument();
      expect(screen.getByText('LM,RM')).toBeInTheDocument();
      expect(screen.getByText('Advanced Wing Training')).toBeInTheDocument();
    });
  });

});
