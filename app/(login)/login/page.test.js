import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './page';

describe('Login Page', () => {
  it('renders a heading', () => {
    render(<Login />);
 
    const heading = screen.getByText('Login');
    
    expect(heading).toBeInTheDocument();
  });

  it('handles login form submission', async () => {
    render(<Login />);
    const usernameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(usernameInput, { target: { value: 'johndoe' } });
    expect(usernameInput).toHaveValue('johndoe');
    
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput).toHaveValue('testpassword');
    fireEvent.click(screen.getByText('Sign In'));


    await waitFor(() => {
      expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    })

  });
});
