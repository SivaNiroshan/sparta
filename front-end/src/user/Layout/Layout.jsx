import React from 'react';
import Topbar from './layoutcomponent/Topbar';
import Sidebar from './layoutcomponent/Sidebar';

const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
    
      <div className="fixed top-0 left-0 right-0 z-10">
        <Topbar />
      </div>

    
      <div className="flex flex-grow pt-18"> {/* Added pt-16 to avoid overlap with Topbar */}
        {/* Sidebar */}
        <div >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow p-4 bg-white">
          <p>Hi</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;