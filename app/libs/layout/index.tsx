import React, { useState } from "react";
import SideBar from "./SideBar";
import Info from "./Info";
import { LayoutProps } from "~/domain/entities/Layout/layout.entity";
import PlaylistBar from "./PlayListBar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const handleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="layout">
      <div className="wrapper">
        <SideBar />
        <div className="main-view">{children}</div>
        <Info />
        <div className="playlist-bar">
          <PlaylistBar isActive={isActive} callBack={handleActive} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
