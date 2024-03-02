import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getAttribute: jest.fn(),
  getAttributeMaster: jest.fn(),
  postAttribute: jest.fn(),
}));

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


    expect(screen.getByText('Form Attribute')).toBeInTheDocument();


    await waitFor(() => {
      expect(api.getAttribute).toHaveBeenCalled();
      expect(api.getAttributeMaster).toHaveBeenCalled();
    });


    expect(screen.getByText('How much do you weigh?')).toBeInTheDocument();
    expect(screen.getByText('How tall are you?')).toBeInTheDocument();

  });

  
});
