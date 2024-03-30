import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardProfile from './CardProfile';

describe('CardProfile Component', () => {
  const player = {
    name: 'John Doe',
    thumbnail: '/john-doe-thumbnail.jpg',
    birth_date: '1990-01-01'
  };

  const activeAttribute = {
    height: '180',
    weight: '75'
  };

  const positions = {
    name: 'Forward',
    'pos2.name': 'Midfielder',
    'pos3.name': 'Defender'
  };

  it('renders CardProfile component with provided props', () => {
    render(
      <CardProfile
        activeAttribute={activeAttribute}
        player={player}
        positions={positions}
        openPlayerModal={() => {}}
      />
    );

    expect(screen.getByText(player.name)).toBeInTheDocument();
    expect(screen.getByText(activeAttribute.height + ' cm')).toBeInTheDocument();
    expect(screen.getByText(activeAttribute.weight + ' kg')).toBeInTheDocument();
    expect(screen.getByText('34')).toBeInTheDocument(); 
  });

  it('calculates age correctly', () => {
    render(
      <CardProfile
        activeAttribute={activeAttribute}
        player={player}
        positions={positions}
        openPlayerModal={() => {}}
      />
    );

    expect(screen.getByText('34')).toBeInTheDocument(); 
  });

  
});
