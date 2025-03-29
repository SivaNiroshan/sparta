import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  Profile2User,
  ArchiveBook,
  DirectInbox,
  Share,
  Setting2,
  Like1,
  NoteText,
  InfoCircle,
} from "iconsax-react";

const drawerElements: [string, React.ElementType][] = [
  ["Friends", Profile2User],
  ["History", ArchiveBook],
  ["Inbox", DirectInbox],
  ["Shared", Share],
  ["Liked", Like1],
  ["Settings", Setting2],
  ["Feedback", NoteText],
  ["About Us", InfoCircle],
];

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Drawer
  variant="permanent"
  sx={{
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
      backgroundColor: "white",
      marginTop: "66px", // Push Sidebar below Topbar
      height: "calc(100vh - 66px)", // Ensure Sidebar does not overlap
    },
  }}
>

    
        <List className="h-full  border-r-2 shadow-md" >
          {drawerElements.map(([text, Icon], index) => {
            const isSelected = selectedIndex === index;
            return (
              <ListItem key={index} disablePadding className={`p-1 mb-7  ${
                isSelected
                  ? "border-2 border-black bg-[#3943B7] bg-opacity-80 text-white "
                  : "hover:bg-[#E5E7EB] text-[#495057]"
              }`}>
                <ListItemButton
                  onClick={() => setSelectedIndex(index)}
                >
                  <ListItemIcon>
                    <Icon size={24} color={isSelected ? "white" : "black"} />
                  </ListItemIcon>
                  <ListItemText primary={<p className="font-extrabold  font-display">{text}</p>}  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      
    </Drawer>
  );
};

export default Sidebar;
