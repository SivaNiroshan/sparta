import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "../../../user/Home/Home";

describe("Home Component", () => {
  it("renders the Home component correctly", () => {
    render(<Home />);

    // Check if the component renders the text "AboutUS"
    expect(screen.getByText("Home")).not.toBeNull();
  });
});