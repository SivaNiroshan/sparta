import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import History from "../../../src/user/History/History";

describe("History Component", () => {
  it("renders the History component correctly", () => {
    render(<History />);

    // Check if the component renders the text "History"
    expect(screen.getByText("History")).not.toBeNull();
  });
});