import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing @testing-library/jest-dom for extended DOM assertions
import CardTraining from './CardTraining';

describe('CardTraining Component', () => {
  const articles = {
    latest_art1_id: 1,
    latest_art1_thumbnail: '/thumbnail1.jpg',
    latest_art1_title: 'Article 1',
    latest_art2_id: 2,
    latest_art2_thumbnail: '/thumbnail2.jpg',
    latest_art2_title: 'Article 2',
    latest_art3_id: 3,
    latest_art3_thumbnail: '/thumbnail3.jpg',
    latest_art3_title: 'Article 3'
  };

  const openTableTrainingModal = jest.fn();

  it('renders CardTraining component with provided props', () => {
    render(
      <CardTraining
        articles={articles}
        openTableTrainingModal={openTableTrainingModal}
      />
    );

    expect(screen.getByText('Training Recommendation')).toBeInTheDocument();
    expect(screen.getByText('View All')).toBeInTheDocument();

    expect(screen.getByText(articles.latest_art1_title)).toBeInTheDocument();
    expect(screen.getByText(articles.latest_art2_title)).toBeInTheDocument();
    expect(screen.getByText(articles.latest_art3_title)).toBeInTheDocument();

    const image1 = screen.getAllByAltText('')[0];
    expect(image1).toBeInTheDocument();

    const image2 = screen.getAllByAltText('')[1];
    expect(image2).toBeInTheDocument();

    const image3 = screen.getAllByAltText('')[2];
    expect(image3).toBeInTheDocument();
  });

  it('calls openTableTrainingModal function when "View All" button is clicked', () => {
    render(
      <CardTraining
        articles={articles}
        openTableTrainingModal={openTableTrainingModal}
      />
    );

    const viewAllButton = screen.getByText('View All');
    viewAllButton.click();

    expect(openTableTrainingModal).toHaveBeenCalled();
  });
});
