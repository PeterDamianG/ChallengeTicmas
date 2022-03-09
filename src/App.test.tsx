import { render, screen, cleanup } from '@testing-library/react';
import App from './App';

afterAll(cleanup);

describe('/src/App.js - <App> - Main Component Renders.', () => {
  test('Does renders main app.', () => {
    render(<App />);
    // <Header> Component.
    screen.getByText('Vi-Datec Frontend Dev Challenge');
    // <InputSearch> Component.
    screen.getByText('Search Movie');
    // False case Component to middleware <CheckMovies>.
    screen.getByText(/You need complete the text field with a minimum of/i);
    // <Footer> Component.
    screen.getByText(/All rights reserved. Ticmas./i);
  });
});
