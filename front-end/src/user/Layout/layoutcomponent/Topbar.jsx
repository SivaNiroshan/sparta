import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Avatar, Tab, Tabs, Button } from "@mui/material";
import SPARTA_LOGO from "../../../assets/SPARTA.png";
import { deepOrange } from "@mui/material/colors";

const Topbar = ({ selectedTab, onTabChange }) => {
  const navigate = useNavigate();

  const tabRoutes = {
    HOME: "/home",
    NOTIFICATION: "/notification",
    PROFILE: "/profile",
  };

  const handleTabChange = (event, newValue) => {
    onTabChange(newValue);
    navigate(newValue);
  };

  const userName = "John Doe";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <AppBar position="static" style={{ backgroundColor: "#78C0E0" }} elevation={0}>
      <Toolbar className="flex justify-between">
        <img src={SPARTA_LOGO} alt="SPARTA Logo" className="h-8 w-auto" />

        <div className="flex items-center space-x-20">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "bold",
                fontSize: "17px",
                color: "black",
                minWidth: "120px",
                margin: "0 12px",
              },
              "& .Mui-selected": {
                color: "white",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "#0000FF",
              },
            }}
          >
            {Object.entries(tabRoutes).map(([key, path]) => (
              <Tab key={key}  value={path} label={key} />
            ))}
          </Tabs>

          <div className="flex items-center space-x-4">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>{userInitial}</Avatar>
            <Button
              variant="contained"
              sx={{
                height: "35px",
                width: "100px",
                backgroundColor: "white",
                fontWeight: "semibold",
                fontSize: "16px",
                color: "#FC0000",
                "&:hover": {
                  backgroundColor: "#FC0000",
                  color: "white",
                },
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

Topbar.propTypes = {
  selectedTab: PropTypes.string,
  onTabChange: PropTypes.func.isRequired,
};

export default Topbar;
