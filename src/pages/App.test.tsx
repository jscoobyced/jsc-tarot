import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByRole("banner");
  const mainElement = screen.getByRole("main");
  const footerElement = screen.getByRole("complementary");
  expect(headerElement).toBeInTheDocument();
  expect(mainElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
