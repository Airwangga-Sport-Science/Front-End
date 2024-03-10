import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TrainingItem from './TrainingItem';

describe('TrainingItem Component', () => {
  it('renders TrainingItem component with provided props', () => {
    const title = 'Test Title';
    const body = 'Test Body';
    const thumbnail = '/test-thumbnail.jpg';
    const id = '123';
    const positions = 'Test Position';

    render(
      <TrainingItem
        title={title}
        body={body}
        thumbnail={thumbnail}
        id={id}
        positions={positions}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(body)).toBeInTheDocument();
    expect(screen.getByAltText('')).toBeInTheDocument(); // Assuming alt text is empty
    expect(screen.getByText('See Detail')).toBeInTheDocument();
  });

  it('renders TrainingItem component with default thumbnail if thumbnail prop is not provided', () => {
    const title = 'Test Title';
    const body = 'Test Body';
    const id = '123';
    const positions = 'Test Position';

    render(
      <TrainingItem
        title={title}
        body={body}
        id={id}
        positions={positions}
      />
    );

    expect(screen.getByAltText('')).toBeInTheDocument(); // Assuming alt text is empty
  });
});
