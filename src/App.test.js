import { render, screen } from "@testing-library/react";
import App from "./App";

test("it should render number 1 on first position", () => {
  render(<App />);
  expect(screen.getByTestId("text-1").textContent).toEqual("1");
});
