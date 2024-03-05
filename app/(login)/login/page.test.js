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
    
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
    const nameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(nameInput, { target: { value: 'JohnDoe' } });
    expect(nameInput).toHaveValue('JohnDoe');
    const passwordInput = screen.getByPlaceholderText('Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput).toHaveValue('testpassword');
    fireEvent.click(screen.getByText('Sign In'));


    await waitFor(() => {
      expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    })

  });
});
