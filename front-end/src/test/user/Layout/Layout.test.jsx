import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Layout from "../../../user/Layout/Layout";
import { Button } from "@mui/material";

// Mock the Topbar and Sidebar components
vi.mock("../../../user/Layout/layoutcomponent/Topbar", () => ({
  default: ({ selectedTab, onTabChange }) => (
    <div data-testid="topbar">
      Topbar - Selected Tab: {selectedTab}
      <Button onClick={() => onTabChange("/home")}>Home</Button>
    </div>
  ),
}));

vi.mock("../../../user/Layout/layoutcomponent/Sidebar", () => ({
  default: ({ selectedIndex, onItemClick }) => (
    <div data-testid="sidebar">
      Sidebar - Selected Index: {selectedIndex}
      <Button onClick={() => onItemClick("/history")}>History</Button>
    </div>
  ),
}));

describe("Layout Component", () => {
  it("renders the Topbar, Sidebar, and Outlet correctly", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="test" element={<div data-testid="outlet-content">Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check if Topbar is rendered
    expect(screen.getByTestId("topbar")).not.toBeNull();

    // Check if Sidebar is rendered
    expect(screen.getByTestId("sidebar")).not.toBeNull();

    // Check if Outlet is rendered
    expect(screen.queryByTestId("outlet-content")).toBeNull();
  });

  it("updates state when interacting with Topbar and Sidebar", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="test" element={<div data-testid="outlet-content">Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Simulate clicking a tab in the Topbar
    const homeTabButton = screen.getByText("Home");
    fireEvent.click(homeTabButton);

    // Check if Topbar state is updated
    expect(screen.getByText("Topbar - Selected Tab: /home")).not.toBeNull();

    // Simulate clicking an item in the Sidebar
    const historyItemButton = screen.getByText("History");
    fireEvent.click(historyItemButton);

    // Check if Sidebar state is updated
    expect(screen.getByText("Sidebar - Selected Index: /history")).not.toBeNull();
  });

  it("renders Outlet content when navigating to a child route", () => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="test" element={<div data-testid="outlet-content">Outlet Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Check if Outlet content is rendered
    expect(screen.getByTestId("outlet-content")).not.toBeNull();
  });
});