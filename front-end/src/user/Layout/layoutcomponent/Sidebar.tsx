import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
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

const drawerElements: [string, React.ElementType, string][] = [
  ["Friends", Profile2User, "/friend"],
  ["History", ArchiveBook, "/history"],
  ["Inbox", DirectInbox, "/inbox"],
  ["Shared", Share, "/shared"],
  ["Liked", Like1, "/liked"],
  ["Settings", Setting2, "/setting"],
  ["Feedback", NoteText, "/feedback"],
  ["About Us", InfoCircle, "/aboutus"],
];

interface SidebarProps {
  selectedPath: string;  // Use selectedPath instead of index
  onItemClick: (path: string) => void;  // Pass path instead of index
}

const Sidebar: React.FC<SidebarProps> = ({ selectedPath, onItemClick }) => {
  const navigate = useNavigate();

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
          marginTop: "66px",
          height: "calc(100vh - 66px)",
        },
      }}
    >
      <List className="h-full border-r-2 shadow-md">
        {drawerElements.map(([text, Icon, path]) => {
          const isSelected = selectedPath === path; // Compare path instead of index
          return (
            <ListItem key={path} disablePadding className={`p-1 mb-7 ${isSelected ? "border-2 border-black bg-[#3943B7] bg-opacity-80 text-white" : "hover:bg-[#E5E7EB] text-[#495057]"}`}>
              <ListItemButton
                onClick={() => {
                  onItemClick(path);  // Pass path instead of index
                  navigate(path);
                }}
              >
                <ListItemIcon>
                  <Icon size={24} color={isSelected ? "white" : "black"} />
                </ListItemIcon>
                <ListItemText primary={<p className="font-extrabold font-display">{text}</p>} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

Sidebar.propTypes = {
  selectedPath: PropTypes.string.isRequired,  // Updated to string
  onItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
