import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Friend from "../../../src/user/Friend/Friend";

describe("Friend Component", () => {
  it("renders the Friend component correctly", () => {
    render(<Friend />);

    // Check if the component renders the text "AboutUS"
    expect(screen.getByText("Friend")).not.toBeNull();
  });
});