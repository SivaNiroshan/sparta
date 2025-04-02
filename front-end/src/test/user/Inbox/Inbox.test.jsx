import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Inbox from "../../../user/Inbox/Inbox";

describe("Inbox Component", () => {
  it("renders the Inbox component correctly", () => {
    render(<Inbox />);

    // Check if the component renders the text "Inbox"
    expect(screen.getByText("Inbox")).not.toBeNull();
  });
});