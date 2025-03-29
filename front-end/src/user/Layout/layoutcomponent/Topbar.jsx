import React, { useState } from "react";
import { AppBar, Toolbar, Avatar, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import SPARTA_LOGO from "../../../assets/SPARTA.png";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  // State for Tabs
  const [value, setValue] = useState("one");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const userName = "John Doe"; // Example user name
  const userInitial = userName.charAt(0).toUpperCase(); // First letter of the user name

  return (
    <AppBar position="static" style={{ backgroundColor: "#78C0E0" }} elevation={0}>
      <Toolbar className="flex justify-between">
        {/* Left Side: Logo */}
        <img src={SPARTA_LOGO} alt="SPARTA Logo" className="h-8 w-auto" />

        {/* Right Side: Tabs */}
        <div className="flex items-center space-x-4">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
            aria-label="navigation tabs"
          >
            <Tab value="one" label="Home" />
            <Tab value="two" label="Notification" />
            <Tab value="three" label="Profile" />
          </Tabs>

          {/* Profile Avatar */}
          <div className="flex items-center space-x-2">
            <Avatar
              className="bg-white text-green-500 cursor-pointer"
              onClick={handleMenuClick}
            >
              {userInitial}
            </Avatar>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              className="mt-2"
            >
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;