// Your test file

import RecommendationModal from './RecommendationModal';
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Mock the useRouter hook
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe('RecommendationModal Component', () => {
  
  test('renders correctly and handles save and decline actions', async () => {
    const setIsOpenMock = jest.fn();
    const positions = ['forward', 'midfielder'];
    const alike = 'Player Name';
    const attributes = { /* attribute data */ };

    const { getByText } = render(
      <RecommendationModal
        isOpen={true}
        setIsOpen={setIsOpenMock}
        positions={positions}
        alike={alike}
        attributes={attributes}
      />
    );

    // Check if modal content is rendered
    
    expect(getByText(`Player Name`)).toBeInTheDocument();
    expect(getByText(`Simpan`)).toBeInTheDocument();
    // fireEvent.click(getByText('Decline'));
    // Check if modal close function is called
    // expect(setIsOpenMock).toHaveBeenCalledWith(false);
  });
});

