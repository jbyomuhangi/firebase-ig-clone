import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import AppBar from "../components/AppBar";
import theme from "../theme";

const AppContainer = styled(Box)(() => ({
  display: "flex",
}));

const OutletContainer = styled(Box)(() => ({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const AppBarLayout: React.FC = () => {
  return (
    <AppContainer>
      <AppBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </AppContainer>
  );
};

export default AppBarLayout;
