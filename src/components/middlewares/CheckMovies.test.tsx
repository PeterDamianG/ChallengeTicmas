import { render, screen, cleanup } from '@testing-library/react';
import CheckMovies from './CheckMovies';

beforeEach(() => render(<CheckMovies search='The Avengers' />));
afterAll(cleanup);

describe('/src/components/middlewares/CheckMovies.tsx - <CheckMovies> - Component Render.', () => {
  test('Does render loading component.', () => {
    screen.getByText('Loading...');
  });
});
