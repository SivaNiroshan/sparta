import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Sidebar from "../../../../src/user/Layout/layoutcomponent/Sidebar";

const mockOnItemClick = vi.fn();

describe("Sidebar Component", () => {
  it("renders all sidebar items correctly", () => {
    render(
      <MemoryRouter>
        <Sidebar key={"/friend"} selectedPath="/friend" onItemClick={mockOnItemClick} />
      </MemoryRouter>
    );

    // Check if all sidebar items are rendered
    expect(screen.getByText("Friends")).not.toBeNull();
    expect(screen.getByText("History")).not.toBeNull();
    expect(screen.getByText("Inbox")).not.toBeNull();
    expect(screen.getByText("Shared")).not.toBeNull();
    expect(screen.getByText("Liked")).not.toBeNull()
    expect(screen.getByText("Settings")).not.toBeNull();
    expect(screen.getByText("Feedback")).not.toBeNull();
    expect(screen.getByText("About Us")).not.toBeNull();
  });

  it("highlights the selected item", () => {
    render(
      <MemoryRouter>
        <Sidebar key={"/friend"} selectedPath="/friend" onItemClick={mockOnItemClick} />
      </MemoryRouter>
    );

    // Check if the selected item is highlighted
    const selectedItem = screen.getByText("Friends").closest("li");
    expect(selectedItem).not.toBeNull();
    expect(selectedItem.className).toContain("border-2");
    expect(selectedItem.className).toContain("border-black");
    expect(selectedItem.className).toContain("bg-[#3943B7]");
    expect(selectedItem.className).toContain("bg-opacity-80");
    expect(selectedItem.className).toContain("text-white");
  });

  it("calls onItemClick with the correct path when an item is clicked", () => {
    render(
      <MemoryRouter>
        <Sidebar key={"/friend"} selectedPath="/friend" onItemClick={mockOnItemClick} />
      </MemoryRouter>
    );

    // Simulate clicking the "History" item
    const historyItem = screen.getByText("History");
    fireEvent.click(historyItem);

    // Ensure the mock function is called with the correct path
    expect(mockOnItemClick).toHaveBeenCalledWith("/history");
  });
});