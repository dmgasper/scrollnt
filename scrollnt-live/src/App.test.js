import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Select a button below to continue/i);
  expect(titleElement).toBeInTheDocument();
});
