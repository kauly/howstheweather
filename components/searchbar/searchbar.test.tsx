import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

import { HELPER_TEXTS, SearchBar } from "./searchbar";

describe("SearchBar", () => {
  test("Render the searchbar with input and button", () => {
    render(<SearchBar />);
    expect(screen.getByRole("search")).toBeVisible();
    expect(screen.getByRole("searchbox")).toBeVisible();
    expect(screen.getByRole("button")).toBeVisible();
  });
  test("Empty input helper text rendered", async () => {
    render(<SearchBar />);
    const user = userEvent.setup();
    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText(HELPER_TEXTS.noText)).toBeVisible();
  });
});
