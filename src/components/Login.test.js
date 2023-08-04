import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import mockedAxios from "../__mocks__/mokedAxios";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: { id: 1, name: "John" },
    }),
  },
}));

test("username input should be rendered", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/username/i);

  expect(userInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);

  const passwordInput = screen.getByPlaceholderText(/password/i);

  expect(passwordInput).toBeInTheDocument();
});

test("usubmit button should be rendered", () => {
  render(<Login />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/username/i);

  expect(userInput.value).toBe("");
});

test("password input should be empty", () => {
  render(<Login />);

  const passwordInput = screen.getByPlaceholderText(/password/i);

  expect(passwordInput.value).toBe("");
});

// TEST FOR DISABLED
test("submit button should be disabled", () => {
  render(<Login />);

  const button = screen.getByRole("button");

  expect(button).toBeDisabled();
});

// TEST FOR LOADING
test("button should not show loading... when disabled", () => {
  render(<Login />);

  const button = screen.getByRole("button");

  expect(button).not.toHaveTextContent(/loading.../i);
});

test("Error message should not be visible", () => {
  render(<Login />);

  const error = screen.getByTestId("error");

  expect(error).toHaveClass("invisible");
});

test("username input should change", () => {
  render(<Login />);

  const userInput = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(userInput, { target: { value: testValue } });

  expect(userInput.value).toBe(testValue);
});

test("password input should be change", () => {
  render(<Login />);

  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInput, { target: { value: testValue } });

  expect(passwordInput.value).toBe(testValue);
});

test("button should not be disabled when input exist", () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });

  expect(button).not.toBeDisabled();
});

// When Button Clicked
test("button should render Loading... when clicked", () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  expect(button).toHaveTextContent(/loading.../i);
});

test("button should not render Loading... after fetching", async () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  await waitFor(() => expect(button).not.toHaveTextContent(/Loading.../i));
});

test("user should be rendered after fetching", async () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/username/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  const userItem = await screen.findByText("John");
  expect(userItem).toBeInTheDocument();
});

test("username should be empty after fetching", async () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const userInput = screen.getByPlaceholderText(/username/i);

  const testValue = "";

  fireEvent.change(userInput, { target: { value: testValue } });
  fireEvent.click(button);

  await waitFor(() => expect(userInput.value).toBe(""));
});

test("password should be empty after fetching", async () => {
  render(<Login />);

  const button = screen.getByRole("button");
  const passwordInput = screen.getByPlaceholderText(/password/i);

  const testValue = "";

  fireEvent.change(passwordInput, { target: { value: testValue } });
  fireEvent.click(button);

  await waitFor(() => expect(passwordInput.value).toBe(""));
});
