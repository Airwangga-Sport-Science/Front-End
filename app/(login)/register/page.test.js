import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './page';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    query: {},
    pathname: '/',
    basePath: '',
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

describe('Register Page', () => {
  it('allows typing into all input fields', () => {
    render(<Login />);

    
    const nameInput = screen.getByPlaceholderText('Name');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');

    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(emailInput).toHaveValue('john@example.com');

    const phoneInput = screen.getByPlaceholderText('Phone');
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    expect(phoneInput).toHaveValue('1234567890');

    const birthdateInput = screen.getByPlaceholderText('Birthdate');
    fireEvent.change(birthdateInput, { target: { value: '2000-01-01' } });
    expect(birthdateInput).toHaveValue('2000-01-01');

    const usernameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    expect(usernameInput).toHaveValue('johndoe');

    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');

    
    const fileInput = screen.getByPlaceholderText('Photo');
    const file = new File(['(⌐□_□)'], 'test.png', { type: 'image/png' });
    fireEvent.change(fileInput, { target: { files: [file] } });
    expect(fileInput.files[0]).toEqual(file);
  });
});
