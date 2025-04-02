import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutUS from "../../../user/AboutUs/AboutUS";

describe("AboutUS Component", () => {
  it("renders the AboutUS component correctly", () => {
    render(<AboutUS />);

    // Check if the component renders the text "AboutUS"
    expect(screen.getByText("AboutUS")).not.toBeNull();
  });
});