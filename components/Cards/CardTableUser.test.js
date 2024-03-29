import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import CardTableUser from './CardTableUser';

describe('CardTableUser Component', () => {
  const users = [
    { id: 1, name: 'User 1', username: 'user1', phone: '1234567890', email: 'user1@example.com', role: 1 },
    { id: 2, name: 'User 2', username: 'user2', phone: '9876543210', email: 'user2@example.com', role: 2 }
  ];

  const handleOpenModal = jest.fn();

  it('renders CardTableUser component with provided props', () => {
    render(
      <CardTableUser
        users={users}
        handleOpenModal={handleOpenModal}
      />
    );

    expect(screen.getByText('User Tables')).toBeInTheDocument();
    expect(screen.getByText('Create User')).toBeInTheDocument();

    users.forEach(user => {
      expect(screen.getByText(user.name)).toBeInTheDocument();
      expect(screen.getByText(user.username)).toBeInTheDocument();
      expect(screen.getByText(user.phone)).toBeInTheDocument();
      expect(screen.getByText(user.email)).toBeInTheDocument();
      expect(screen.getByText(user.role === 1 ? 'User' : 'Admin')).toBeInTheDocument();
    });
  });

  it('calls handleOpenModal function when "Create User" button is clicked', () => {
    render(
      <CardTableUser
        users={users}
        handleOpenModal={handleOpenModal}
      />
    );

    const createUserButton = screen.getByText('Create User');
    createUserButton.click();

    expect(handleOpenModal).toHaveBeenCalled();
  });
});
