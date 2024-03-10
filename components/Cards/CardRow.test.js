import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CardRow from './CardRow';

describe('CardRow Component', () => {
  const title = 'Test Title';
  const body = 'Test Body';
  const positions = 'Test Positions';
  const thumbnail = '/test-thumbnail.jpg';
  const id = '123';

  it('renders CardRow component with provided props', () => {
    render(
      <CardRow
        title={title}
        body={body}
        positions={positions}
        thumbnail={thumbnail}
        id={id}
        handleOpenModal={() => {}}
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(body)).toBeInTheDocument();
    expect(screen.getByText(positions)).toBeInTheDocument();
    expect(screen.getAllByAltText('...')[0]).toBeInTheDocument(); // Assuming alt text is empty
  });

  it('renders default thumbnail if thumbnail prop is not provided', () => {
    render(
      <CardRow
        title={title}
        body={body}
        positions={positions}
        id={id}
        handleOpenModal={() => {}}
      />
    );

    expect(screen.getAllByAltText('...')[0]).toBeInTheDocument(); // Assuming alt text is empty
  });
});
