import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Feedback from "../../../user/Feedback/Feedback";

describe("Feedback Component", () => {
  it("renders the Feedback component correctly", () => {
    render(<Feedback />);

    // Check if the component renders the text "AboutUS"
    expect(screen.getByText("Feedback")).not.toBeNull();
  });
});