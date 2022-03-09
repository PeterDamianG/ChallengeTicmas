import { render, screen, cleanup } from '@testing-library/react';
import Footer from './Footer';

afterAll(cleanup);

describe('/src/components/layout/footer/Footer.tsx - <Footer> - Component Render.', () => {
  test('Does renders default footer.', () => {
    render(<Footer />);
    const content = `Copyright ${new Date().getFullYear()} Peter DG, Inc. All rights reserved. Ticmas.`;
    screen.getByText(content);
  });
  test('Does renders footer pass props.', () => {
    const newContent = 'Testing Footer.';
    render(<Footer content={newContent} />);
    screen.getByText(newContent);
  });
});
