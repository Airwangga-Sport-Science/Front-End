import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TrainingList from './TrainingList';

describe('TrainingList Component', () => {
  it('renders TrainingList component with provided articles', () => {
    const articles = [
      { id: 1, title: 'Title 1', body: 'Body 1', thumbnail: '/thumbnail1.jpg', positions: 'Position 1' },
      { id: 2, title: 'Title 2', body: 'Body 2', thumbnail: '/thumbnail2.jpg', positions: 'Position 2' },
      { id: 3, title: 'Title 3', body: 'Body 3', thumbnail: '/thumbnail3.jpg', positions: 'Position 3' }
    ];

    render(<TrainingList articles={articles} />);

    articles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.body)).toBeInTheDocument();
      expect(screen.getAllByAltText('')[0]).toBeInTheDocument(); // Assuming alt text is empty
      expect(screen.getAllByText('See Detail')[0]).toBeInTheDocument();
    });
  });

  it('renders TrainingList component with default thumbnail if thumbnail prop is not provided', () => {
    const articles = [
      { id: 1, title: 'Title 1', body: 'Body 1', positions: 'Position 1' },
      { id: 2, title: 'Title 2', body: 'Body 2', positions: 'Position 2' },
      { id: 3, title: 'Title 3', body: 'Body 3', positions: 'Position 3' }
    ];

    render(<TrainingList articles={articles} />);

    articles.forEach(article => {
      expect(screen.getAllByAltText('')[0]).toBeInTheDocument(); // Assuming alt text is empty
    });
  });
});
