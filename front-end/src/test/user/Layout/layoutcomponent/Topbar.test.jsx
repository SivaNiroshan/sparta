import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Topbar from "../../../../user/Layout/layoutcomponent/Topbar";

const mockOnTabChange = vi.fn();

describe("Topbar Component", () => {
  it("renders the Topbar with logo, tabs, and logout button", () => {
    render(
      <MemoryRouter>
        <Topbar key={"/home"} selectedTab="/home" onTabChange={mockOnTabChange} />
      </MemoryRouter>
    );

    expect(screen.getByAltText("SPARTA Logo")).not.toBeNull();
    expect(screen.getByText("HOME")).not.toBeNull();
    expect(screen.getByText("NOTIFICATION")).not.toBeNull();
    expect(screen.getByText("PROFILE")).not.toBeNull();
    expect(screen.getByText("Logout")).not.toBeNull();
  });

  it("calls onTabChange when a tab is clicked", () => {
    render(
      <MemoryRouter>
        <Topbar key={"/home"} selectedTab="/home" onTabChange={mockOnTabChange} />
      </MemoryRouter>
    );

    const notificationTab = screen.getByText("NOTIFICATION");
    fireEvent.click(notificationTab);

    expect(mockOnTabChange).toHaveBeenCalledWith("/notification");
  });

  it("displays user initial in Avatar", () => {
    render(
      <MemoryRouter>
        <Topbar key={"/home"} selectedTab="/home" onTabChange={mockOnTabChange} />
      </MemoryRouter>
    );

    expect(screen.getByText("J")).not.toBeNull(); // First letter of "John Doe"
  });
});
