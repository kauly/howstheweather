import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { Button } from "./button";

describe("Button", () => {
  test("Render button with the correct text", () => {
    render(<Button>Search</Button>);
    const button = screen.getByRole("button");
    const text = screen.getByText("Search");
    expect(button).toBeInTheDocument();
    expect(text).toBeVisible();
  });
  test("Render the loading indicator", () => {
    render(<Button loading={true}>Search</Button>);
    const spinner = screen.getByRole("progressbar");
    expect(spinner).toBeVisible();
  });
  test("Button disabled when loading", () => {
    render(<Button loading={true}>Search</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });
});
