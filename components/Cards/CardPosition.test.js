import { render, screen } from '@testing-library/react';
import CardPositions from './CardPositions';
import '@testing-library/jest-dom';
describe('CardPositions Component', () => {
  
  test('renders positions correctly', () => {
    const positions = {
      name: 'LM',
      'pos2.name': 'RM',
      'pos3.name': 'CDM'
    };
    render(<CardPositions positions={positions} />);
    const LMElement = screen.getAllByText('LM');
    const RMElement = screen.getAllByText('RM');
    const CDMElement = screen.getAllByText('CDM');
    expect(LMElement).toHaveLength(2);
    expect(RMElement).toHaveLength(2);
    expect(CDMElement).toHaveLength(2);
  });


});
