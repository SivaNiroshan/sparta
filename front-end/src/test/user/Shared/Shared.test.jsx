import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Shared from "../../../user/Shared/Shared";

describe("Shared Component", () => {
  it("renders the Shared component correctly", () => {
    render(<Shared />);

    // Check if the component renders the text "Shared"
    expect(screen.getByText("Shared")).not.toBeNull();
  });
});