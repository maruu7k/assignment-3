import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  //Render the component
  const { container } = render(<App />);

  //Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders the Wordle-anche! heading", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText("Wordle-anche!");
  expect(headingElement).toBeInTheDocument();
});

test("allows user input in each input field", () => {
  const { container } = render(<App />);
  const inputFields = container.querySelectorAll("input");

  inputFields.forEach((inputField, index) => {
    fireEvent.change(inputField, { target: { value: "A" } });
    expect(inputField.value).toBe("A");
  });
});

test("renders the App component without crashing", () => {
  render(<App />);
  // If the component renders without crashing, the test passes
});

test("renders the App component with the correct title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Wordle-anche!");
  expect(titleElement).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  //Render the component
  const { container } = render(<App />);

  //Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".game-til"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});
