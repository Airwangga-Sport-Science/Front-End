import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UsersModal from './UsersModal';
import '@testing-library/jest-dom';
import api from '@/utils/api';



describe('UsersModal Component', () => {
  const closeModal = jest.fn();
  const setUsers = jest.fn();

  const users = [
    { id: 1, name: 'User 1', email: 'user1@example.com', birth_date: '1990-01-01', phone: '123456789', role: 'User' },
    { id: 2, name: 'User 2', email: 'user2@example.com', birth_date: '1990-01-02', phone: '987654321', role: 'Admin' },
  ];

  const id = 1;

  beforeEach(() => {
    render(
      <UsersModal
        isOpen={true}
        closeModal={closeModal}
        users={users}
        id={id}
        setUsers={setUsers}
      />
    );
  });

  it('renders UsersModal component with form fields', async () => {
    expect(screen.getByText('Add User')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Phone')).toBeInTheDocument();
    expect(screen.getByLabelText('Birthdate')).toBeInTheDocument();
    expect(screen.getByLabelText('Role')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Thumbnail')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Create' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument();
  });

});
