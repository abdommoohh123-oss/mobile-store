import { useState } from "react";
import "./Header.css";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import Actions from "./Actions";
import SideNav from "../SideNav/Sidenav";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarOpenHandler = () => {
    setSidebarOpen(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarOpen(false);
  }

  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <Navigation />
        <Search />
        <Actions openSidebar={sidebarOpenHandler} />
        {sidebarOpen && <SideNav closeSidebar={sidebarCloseHandler} />}
      </div>
    </header>
  );
}

export default Header;