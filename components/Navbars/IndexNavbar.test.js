import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './IndexNavbar';

describe('Navbar Component', () => {
  const mockUser = {
    role: 1 // Example user role
  };
  const mockHandleLogOut = jest.fn(); // Mocking the handleLogOut function

  beforeEach(() => {
    render(
      <Navbar
        user={mockUser}
        handleLogOut={mockHandleLogOut}
      />
    );
  });

  it('renders navigation links correctly based on user role', () => {
    const dashboardLink = screen.getByText('Dashboard');
    const trainingLink = screen.getByText('Training');

    expect(dashboardLink).toBeInTheDocument();
    expect(trainingLink).toBeInTheDocument();
  });

  it('renders logout button when user is logged in', () => {
    const logoutButton = screen.getByText('Logout');
    expect(logoutButton).toBeInTheDocument();
  });

  it('calls handleLogOut when logout button is clicked', () => {
    const logoutButton = screen.getByText('Logout');
    fireEvent.click(logoutButton);
    expect(mockHandleLogOut).toHaveBeenCalledTimes(1);
  });
});
