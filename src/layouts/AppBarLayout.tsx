import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../components/AppBar";

const AppBarLayout: React.FC = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};

export default AppBarLayout;
