import { movie } from 'types/movie';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ItemCard from './ItemCard';
/**
 * Data mock.
 */
const mockDataMovies: movie[] = [
  {
    adult: false,
    backdrop_path: '/nNmJRkg8wWnRmzQDe2FwKbPIsJV.jpg',
    genre_ids: [878, 28, 12],
    id: 24428,
    original_language: 'en',
    original_title: 'The Avengers',
    overview:
      'When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!',
    popularity: 266.452,
    poster_path: '/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
    release_date: '2012-04-25',
    title: 'The Avengers',
    video: false,
    vote_average: 7.7,
    vote_count: 26480,
  },
];

beforeEach(() => render(
  <ItemCard
    imageUrlPoster={mockDataMovies[0].poster_path}
    title={mockDataMovies[0].title}
    year={mockDataMovies[0].release_date}
    imagenUrlBack={mockDataMovies[0].backdrop_path}
    originalTitle={mockDataMovies[0].original_title}
    average={mockDataMovies[0].vote_average}
  />,
));
afterAll(cleanup);

describe('/src/components/movielist/itemcard/ItemCard.tsx - <ItemCard> - Component Render.', () => {
  test('Does render component front card.', () => {
    screen.getByText(mockDataMovies[0].title);
    screen.getByText(/2012-04-25/i);
  });
  test('Does render component back card.', () => {
    userEvent.click(screen.getByText(mockDataMovies[0].title));
    screen.getByText(mockDataMovies[0].original_title);
    screen.getByText(/7.7/i);
  });
});
