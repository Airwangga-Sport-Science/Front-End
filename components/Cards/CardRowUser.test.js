import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardRowUser from './CardRowUser';

describe('CardRowUser Component', () => {
  const name = 'John Doe';
  const role = 2;
  const username = 'johndoe';
  const phone = '1234567890';
  const email = 'johndoe@example.com';
  const id = '123';

  it('renders CardRowUser component with provided props', () => {
    render(
      <CardRowUser
        name={name}
        role={role}
        username={username}
        phone={phone}
        email={email}
        id={id}
        handleOpenModal={() => {}}
      />
    );

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(username)).toBeInTheDocument();
    expect(screen.getByText(phone)).toBeInTheDocument();
    expect(screen.getByText(email)).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
  });

  it('renders "User" if role prop is not 2', () => {
    render(
      <CardRowUser
        name={name}
        role={1}
        username={username}
        phone={phone}
        email={email}
        id={id}
        handleOpenModal={() => {}}
      />
    );

    expect(screen.getByText('User')).toBeInTheDocument();
  });
});
