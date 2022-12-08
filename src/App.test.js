import { render, screen } from "@testing-library/react";
import App from "./App";

test("it should render number 1 on first position", () => {
  render(<App />);
  expect(screen.getByTestId("text-1").textContent).toEqual("1");
});

test("it should render number 2 on second position", () => {
  render(<App />);
  expect(screen.getByTestId("text-2").textContent).toEqual("2");
});

test("it should render text Fizz on third position as it is multiple of 3", () => {
  render(<App />);
  expect(screen.getByTestId("text-3").textContent).toEqual("Fizz");
});
