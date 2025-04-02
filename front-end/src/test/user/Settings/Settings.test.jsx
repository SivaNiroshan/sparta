import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Settings from "../../../user/Settings/Settings";

describe("Settings Component", () => {
  it("renders the Settings component correctly", () => {
    render(<Settings />);

    // Check if the component renders the text "Settings"
    expect(screen.getByText("Settings")).not.toBeNull();
  });
});