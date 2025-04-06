import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import userRoutes from "../../src/routes/userRoute";

// Mock all components used in userRoutes
vi.mock("../../src/user/Home/Home", () => ({
  default: () => <div>Home</div>,
}));
vi.mock("../../src/user/Notification/Notification", () => ({
  default: () => <div>Notification</div>,
}));
vi.mock("../../src/user/Profile/Profile", () => ({
  default: () => <div>Profile</div>,
}));
vi.mock("../../src/user/Friend/Friend", () => ({
  default: () => <div>Friend</div>,
}));
vi.mock("../../src/user/Inbox/Inbox", () => ({
  default: () => <div>Inbox</div>,
}));
vi.mock("../../src/user/Settings/Settings", () => ({
  default: () => <div>Settings</div>,
}));
vi.mock("../../src/user/History/History", () => ({
  default: () => <div>History</div>,
}));
vi.mock("../../src/user/Shared/Shared", () => ({
  default: () => <div>Shared</div>,
}));
vi.mock("../../src/user/Feedback/Feedback", () => ({
  default: () => <div>Feedback</div>,
}));
vi.mock("../../src/user/AboutUs/AboutUS", () => ({
  default: () => <div>AboutUS</div>,
}));
vi.mock("../../src/user/Liked/Liked", () => ({
  default: () => <div>Liked</div>,
}));

describe("userRoutes", () => {
  it("renders the correct component for each route", () => {
    userRoutes.forEach((route) => {
      if (route.path !== "/") {
        render(
          <MemoryRouter initialEntries={[route.path]}>
            <Routes>
              <Route path={route.path} element={route.element} />
            </Routes>
          </MemoryRouter>
        );

        // Check if the component for the route is rendered
        const routePath = route.path.replace("/", "");
        expect(screen.getByText(new RegExp(routePath, "i"))).not.toBeNull();
      }
    });
  });

  it("redirects to /home for the default route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          {userRoutes.map((route, index) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </MemoryRouter>
    );

    // Check if the default route redirects to /home
    expect(screen.getByText("Home")).not.toBeNull();
  });
});