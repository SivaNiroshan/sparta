import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Notification from "../../../src/user/Notification/Notification";

describe("Notification Component", () => {
  it("renders the Notification component correctly", () => {
    render(<Notification />);

    // Check if the component renders the text "Notification"
    expect(screen.getByText("Notification")).not.toBeNull();
  });
});