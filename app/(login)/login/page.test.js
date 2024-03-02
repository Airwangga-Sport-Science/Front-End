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
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByText('Sign In'));


    await waitFor(() => {
      expect(screen.getByText('Invalid username or password')).toBeInTheDocument();
    })

  });
});
