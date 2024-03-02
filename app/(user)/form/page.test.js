import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getAttributeMaster: jest.fn(),
  postAttribute: jest.fn(),
}));

describe('Form Component', () => {
  beforeEach(() => {

    api.getAttributeMaster.mockClear();
    api.postAttribute.mockClear();
  });

  it('renders the Form component and loads attributes', async () => {

    const mockAttributeMaster = [
      { attribute_name: 'weight', attribute_question: 'How much do you weigh?', attribute_display: 'Slider' },
      { attribute_name: 'height', attribute_question: 'How tall are you?', attribute_display: 'Slider' },
      { attribute_name: 'prefered_foot', attribute_question: 'Which foot do you prefer?', attribute_display: 'Radio' },

    ];

    api.getAttributeMaster.mockResolvedValue(mockAttributeMaster);

    render(<Form />);


    expect(screen.getByText('Form Attribute')).toBeInTheDocument();


    await waitFor(() => {
      expect(api.getAttributeMaster).toHaveBeenCalled();
    });

    expect(screen.getByText('How much do you weigh?')).toBeInTheDocument();
    expect(screen.getByText('How tall are you?')).toBeInTheDocument();
    expect(screen.getByText('Which foot do you prefer?')).toBeInTheDocument();

  });

});
