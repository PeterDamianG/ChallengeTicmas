import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterAll(cleanup);

describe('/src/components/layout/header/Header.tsx - <Header> - Component Render.', () => {
  test('Does renders default Header.', () => {
    render(<Header />);
    const title = 'Vi-Datec Frontend Dev Challenge';
    screen.getByText(title);
  });
  test('Does renders header pass props.', () => {
    const newTitle = 'Testing Header.';
    render(<Header title={newTitle} />);
    screen.getByText(newTitle);
  });
});
