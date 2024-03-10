import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerModal from './PlayerModal';

describe('PlayerModal', () => {
  const player = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    birth_date: '1990-01-01',
    username: 'johndoe',
    password: 'password',
    thumbnail: 'path/to/image.jpg',
  };

  it('renders player modal correctly', () => {
    render(
      <PlayerModal
        isOpen={true}
        closeModal={() => {}}
        player={player}
        setPlayer={() => {}}
      />
    );

    // Ensure that player information is rendered correctly
    expect(screen.getByLabelText('Name')).toHaveValue(player.name);
    expect(screen.getByLabelText('Email')).toHaveValue(player.email);
    expect(screen.getByLabelText('Phone')).toHaveValue(player.phone);
    expect(screen.getByLabelText('Birthdate')).toHaveValue(player.birth_date);
    expect(screen.getByLabelText('Username')).toHaveValue(player.username);
    expect(screen.getByLabelText('Photo Profile')).toBeInTheDocument();
  });
});
