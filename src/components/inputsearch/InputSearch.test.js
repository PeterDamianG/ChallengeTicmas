import { render, screen, cleanup } from '@testing-library/react';
import InputSearch from './InputSearch';

beforeEach(() => render(<InputSearch isError={false} fnSearch={() => null} />));
afterAll(cleanup);

describe('/src/components/inputsearch/InputSearch.tsx - <InputSearch> - Input Renders', () => {
  test('Does renders input text', () => {
    screen.getByText('Search Movie');
    screen.getByPlaceholderText('Avengers: Endgame');
    screen.getByText('Find the movie you want.');
  });
});

describe('/src/components/inputsearch/InputSearch.tsx - <InputSearch> - Input Change Values', () => {
  test('Does change input text', () => {
    const inputText = screen.getByPlaceholderText('Avengers: Endgame');
    inputText.value = 'Spider-Man';
    expect(inputText.value).toBe('Spider-Man');
  });
});
