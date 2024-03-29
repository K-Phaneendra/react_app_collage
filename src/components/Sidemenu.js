import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import { AudioFileIcon, FaceIcon, MicrophoneIcon, SparklesIcon, EmailIcon, MdChatIcon } from "../assets/icons/icons";

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
        <MenuItem
          icon={<SparklesIcon title="Sketch an image" />}
          active={isMenuItemActive(paths.imageSketch)}
        >
          <a href={paths.imageSketch}>Sketch an image</a>
        </MenuItem>
        <MenuItem
          icon={<MdChatIcon title="Chat" />}
          active={isMenuItemActive(paths.chat)}
        >
          <a href={paths.chat}>Chat</a>
        </MenuItem>
        <MenuItem
          icon={<EmailIcon title="Contact me" />}
          active={isMenuItemActive(paths.contact)}
        >
          <a href={paths.contact}>Contact me</a>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidemenu;
