import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Form from './page';
import api from '@/utils/api';

jest.mock('@/utils/api', () => ({
  getAttributeMaster: jest.fn(),
  postAttribute: jest.fn(),
}));
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
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
      { attribute_name: 'movement_sprint_speed', attribute_question: 'How would you rate your movement sprint speed?', attribute_display: 'Slider' },
    ];

    api.getAttributeMaster.mockResolvedValue(mockAttributeMaster);

    render(<Form />);

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Next'));


    await waitFor(() => {
      expect(api.getAttributeMaster).toHaveBeenCalled();
    });

    expect(screen.getByText('How would you rate your movement sprint speed?')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    fireEvent.click(screen.getByText('Next'));
    
    expect(screen.getByText('Submit')).toBeInTheDocument();

  });

});
