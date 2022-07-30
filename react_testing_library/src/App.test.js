import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    // screen.debug();
    expect(helloWorldElem).toMatchSnapshot();
    expect(btn).toMatchSnapshot();
    expect(input).toMatchSnapshot();
  });

  test('renders learn react link', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello world2/i);
    // expect(helloWorldElem).toBeNull();
    screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({color: 'red'});
    screen.debug();
  });
})


