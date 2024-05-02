import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardStatistic from './CardStatistic';
import { act } from 'react-dom/test-utils';

jest.mock('@/utils/api', () => ({
  getAttributeMaster: jest.fn(() => Promise.resolve([
    { attribute_name: 'attribute1', attribute_display: 'Display 1' },
    { attribute_name: 'attribute2', attribute_display: 'Display 2' }
  ]))
}));

describe('CardStatistic Component', () => {
  const activeAttribute = {
    attribute1: 50,
    attribute2: 80
  };

  const positions = {
    player_alike1: 'Player A',
    player_alike2: 'Player B',
    player_alike3: 'Player C'
  };

  it('renders CardStatistic component with provided props', async () => {
    await act(async () => {
      render(
        <CardStatistic activeAttribute={activeAttribute} positions={positions} />
      )
    })

    expect(screen.getByText('Player Statistic')).toBeInTheDocument();
    expect(screen.getByText('Similar Players')).toBeInTheDocument();
    expect(screen.getByText(/Player A/i)).toBeInTheDocument();
    expect(screen.getByText(/Player B/i)).toBeInTheDocument();
    expect(screen.getByText(/Player C/i)).toBeInTheDocument();
  });
});
