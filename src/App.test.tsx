import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  
});

describe("clickfunction", () => {
  it("click on the hyperlink", () => {
    render(<App />);
      const load = screen.getByTestId('load');
      //fireEvent.click(userclick);
      screen.debug();
  });
});
