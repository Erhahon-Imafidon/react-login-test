import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

test("renders learn more link", () => {
  render(<App />);

  const linkElement = screen.getByText(/learn more/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders 3 list items", () => {
  render(<App />);

  const listElement = screen.getAllByRole("listitem");
  expect(listElement).toHaveLength(3);
});

test("increments counter", () => {
  render(<App />);

  const incrementBtn = screen.getByText(/count/i);
  fireEvent.click(incrementBtn);
});

test("sum should be 6", () => {
  render(<App />);

  const mySum = screen.getByTitle("sum");

  expect(mySum.textContent).toBe("6");
});

test("renders title", () => {
  render(<App />);

  const myTitle = screen.getByTestId("mytestid");
  expect(myTitle).toBeInTheDocument();
});
