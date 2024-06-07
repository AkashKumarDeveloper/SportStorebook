import React from "react";
import { Outlet } from "react-router-dom";
import SideNavbar from "../Pages/Page 2";

const WithNav = ({ theme, toggleTheme }) => {
  return (
    <>
      <SideNavbar theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
};

export default WithNav;
