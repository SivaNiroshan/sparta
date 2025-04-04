import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../user/Home/Home";
import Notification from "../user/Notification/Notification";
import Profile from "../user/Profile/Profile";
import Friend from "../user/Friend/Friend";
import Inbox from "../user/Inbox/Inbox";
import Settings from "../user/Settings/Settings";
import History from "../user/History/History";
import Shared from "../user/Shared/Shared";
import Feedback from "../user/Feedback/Feedback";
import Liked from "../user/Liked/Liked";
import AboutUS from "../user/AboutUs/AboutUS";


const userRoutes = [
  { path: "/home", element: <Home/> },
  { path: "/notification", element: <Notification /> },
  { path: "/profile", element: <Profile /> },
  { path: "/friend", element: <Friend /> },
  { path: "/inbox", element: <Inbox /> },
  { path: "/setting", element: <Settings /> },
  { path: "/history", element: <History /> },
  { path: "/shared", element: <Shared /> },
  { path: "/feedback", element: <Feedback /> },
  { path: "/aboutus", element: <AboutUS /> },
  { path: "/liked", element: <Liked/> },
  { path: "/", element: <Navigate to="/home" /> }, // Default route
];

export default userRoutes;
