import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Profile from "../../../src/user/Profile/Profile";

describe("Profile Component", () => {
  it("renders the Profile component correctly", () => {
    render(<Profile />);

    // Check if the component renders the text "Profile"
    expect(screen.getByText("Profile")).not.toBeNull();
  });
});