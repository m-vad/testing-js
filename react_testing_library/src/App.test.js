import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

test('renders learn react link', () => {
  render(<App />);
  const helloWorldElem = screen.getByText(/hello world/i);
  const btn = screen.getByRole('button');
  const input = screen.getByPlaceholderText(/input value/i);
  expect(helloWorldElem).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
  expect(input).toBeInTheDocument();
  screen.debug();
  expect(helloWorldElem).toMatchSnapshot();
  expect(btn).toMatchSnapshot();
  expect(input).toMatchSnapshot();
});
