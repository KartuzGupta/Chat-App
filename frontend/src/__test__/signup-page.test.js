import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Signup from "../components/Authentication/Signup";

function hasInputValue(e, inputValue) {
  return screen.getByDisplayValue(inputValue) === e;
}

// Testing Rendring of Signup Component
test("Rendring Signup Component", () => {
  render(<Signup />);

  const componentInput = screen.getByText("Sign Up", { exact: false });
  expect(componentInput).toBeInTheDocument();
});

// Testing Rendring of Email Field
test("Testing  Input Fields", async () => {
  render(<Signup />);
  // Name Field
  const renderNameField = screen.getByPlaceholderText("Enter name");
  expect(renderNameField).toBeInTheDocument();

  // Email Field
  const renderEmailField = screen.getByPlaceholderText("Enter email");
  expect(renderEmailField).toBeInTheDocument();

  //  Password Field
  const renderPassword = screen.getByPlaceholderText("Enter password");
  expect(renderPassword).toBeInTheDocument();

  // Confirm Password Field
  const renderConfirmPassword = screen.getByPlaceholderText("Confirm password");
  expect(renderConfirmPassword).toBeInTheDocument();
});

// Testing Name Field is Correctly Working
test("Testing Input Name Field", () => {
  render(<Signup />);
  const input = screen.getByPlaceholderText("Enter name");

  fireEvent.change(input, { target: { value: "Jagroop Singh" } });
  expect(hasInputValue(input, "Jagroop Singh")).toBe(true);
});

// Testing Email Field is Correctly Working
test("Testing Input Email Field", () => {
  render(<Signup />);
  const input = screen.getByPlaceholderText("Enter email");

  fireEvent.change(input, { target: { value: "jagroop@yopmail.com" } });
  expect(hasInputValue(input, "jagroop@yopmail.com")).toBe(true);
});

// Testing password Field is Correctly Working
test("Testing Input password Field", () => {
  render(<Signup />);
  const input = screen.getByPlaceholderText("Enter password");

  fireEvent.change(input, { target: { value: "Test@123$" } });
  expect(hasInputValue(input, "Test@123$")).toBe(true);
});

// Testing confirm password Field is Correctly Working
test("Testing Confirm Input password Field", () => {
  render(<Signup />);
  const input = screen.getByPlaceholderText("Enter password");

  fireEvent.change(input, { target: { value: "Test@123$" } });
  expect(hasInputValue(input, "Test@123$")).toBe(true);
});
