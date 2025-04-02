import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Liked from "../../../user/Liked/Liked";

describe("Liked Component", () => {
  it("renders the Liked component correctly", () => {
    render(<Liked />);

    // Check if the component renders the text "AboutUS"
    expect(screen.getByText("Liked")).not.toBeNull();
  });
});