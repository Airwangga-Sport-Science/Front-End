import { render, screen } from '@testing-library/react';
import CardTraining from './CardTraining';
import '@testing-library/jest-dom'; 

jest.mock('@/utils/api', () => ({
  getArticleByAttribute: jest.fn(() => Promise.resolve([
    {
      article_id: 1,
      article_title: 'Training Article 1',
      article_thumbnail: '/img/img-1-1000x600.jpg'
    },
    {
      article_id: 2,
      article_title: 'Training Article 2',
      article_thumbnail: '/img/img-2-1000x600.jpg'
    }
  ])),
  imageUrl: jest.fn(),
}));

describe('CardTraining Component', () => {
  test('renders training recommendations correctly', async () => {
    render(<CardTraining activeAttribute={{ id: 1 }} openTableTrainingModal={() => {}} />);
    const training1Element = await screen.findByText(/Training Article 1/i);
    const training2Element = await screen.findByText(/Training Article 2/i);
    expect(training1Element).toBeInTheDocument();
    expect(training2Element).toBeInTheDocument();
  });


  test('renders View All button', async () => {
    render(<CardTraining activeAttribute={{ id: 1 }} openTableTrainingModal={() => {}} />);
    const viewAllButton = await screen.findByText('View All');
    expect(viewAllButton).toBeInTheDocument();
  });
});
