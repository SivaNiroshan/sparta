import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./layoutcomponent/Topbar";
import Sidebar from "./layoutcomponent/Sidebar";

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState("/home");
  const [selectedSidebarIndex, setSelectedSidebarIndex] = useState(null);

  const handleTabChange = (newTab) => {
    setSelectedTab(newTab);
    setSelectedSidebarIndex(null);
  };

  const handleSidebarClick = (index) => {
    setSelectedSidebarIndex(index);
    setSelectedTab(null);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Topbar selectedTab={selectedTab} onTabChange={handleTabChange} />
      </div>

      {/* Main Layout */}
      <div className="flex flex-grow pt-18">
        {/* Sidebar */}
        <div>
          <Sidebar selectedIndex={selectedSidebarIndex} onItemClick={handleSidebarClick} />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-4 bg-white">
          <Outlet /> {/* Dynamic content from routes */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
