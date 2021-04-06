import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { AudioFileIcon, FaceIcon, MicrophoneIcon } from "../assets/icons/icons";

import paths from "../Router/paths.json";

import "react-pro-sidebar/dist/css/styles.css";
import "../assets/styles/Sidemenu.css";

function Sidemenu({ isMenuCollapsed, toggleSidemenu }) {
  // checks if the menu item is active or not
  const isMenuItemActive = (path) => {
    const pathname = window.location.pathname;
    if (path === pathname) {
      return true;
    }
    return false;
  };

  return (
    <ProSidebar onToggle={toggleSidemenu} collapsed={isMenuCollapsed}>
      <Menu iconShape="circle">
        <MenuItem
          icon={<AudioFileIcon title="Audio file to text" />}
          active={isMenuItemActive(paths.audioToText)}
        >
          <a href={paths.audioToText}>Audio file to text</a>
        </MenuItem>
        <MenuItem
          icon={<MicrophoneIcon title="Dictate" />}
          active={isMenuItemActive(paths.dictation)}
        >
          <a href={paths.dictation}>Dictate</a>
        </MenuItem>
        <MenuItem
          icon={<FaceIcon title="Face recognition" />}
          active={isMenuItemActive(paths.faceRecognition)}
        >
          <a href={paths.faceRecognition}>Face recognition</a>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidemenu;
