import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './page';
import api from '@/utils/api';
import { useParams } from 'next/navigation';

jest.mock('@/utils/api', () => ({
  getAttribute: jest.fn(),
  getAttributeMaster: jest.fn(),
  postAttribute: jest.fn(),
}));

// Mock the useRouter hook


jest.mock('next/navigation', () => ({
  useParams: jest.fn().mockReturnValue({ id: '123' }),
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}))
describe('Form Component', () => {
  beforeEach(() => {
    api.getAttribute.mockClear();
    api.getAttributeMaster.mockClear();
    api.postAttribute.mockClear();
  });

  it('renders the Form component and loads attributes', async () => {


    const mockAttributes = {
      weight: 70,
      height: 180,
      prefered_foot: 'left',
    };


    api.getAttribute.mockResolvedValue(mockAttributes);
    api.getAttributeMaster.mockResolvedValue([
      { attribute_name: 'weight', attribute_question: 'How much do you weigh?' },
      { attribute_name: 'height', attribute_question: 'How tall are you?' },
    ]);

    render(<Form />);
    fireEvent.click(screen.getByText('Next'));
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();


    expect(screen.getByText('Form Attribute')).toBeInTheDocument();

    await waitFor(() => {
      expect(api.getAttribute).toHaveBeenCalled();
      expect(api.getAttributeMaster).toHaveBeenCalled();
    });


  });
});
