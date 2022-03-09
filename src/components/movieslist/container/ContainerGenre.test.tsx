import { movie } from 'types/movie';
import { render, screen, cleanup } from '@testing-library/react';
import ContainerGenre from './ContainerGenre';
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

afterAll(cleanup);

describe('/src/components/movielist/container/ContainerGenre.tsx - <ContainerGenre> - Component Render.', () => {
  test('Does render accordion title component.', () => {
    render(<ContainerGenre data={mockDataMovies} />);
    screen.getByText('Adventure');
    screen.getByText('Action');
    screen.getByText('Science Fiction');
  });
  test('Does render all title movies.', () => {
    render(<ContainerGenre data={mockDataMovies} />);
    const allMovies = screen.getAllByText(/The Avengers/i);
    expect(allMovies.length).toEqual(3);
  });
});
