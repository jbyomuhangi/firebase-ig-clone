import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import ExtraSmallScreenTopBar from "./ExtraSmallScreenTopBar";
import ExtraSmallScreenNavBar from "./ExtraSmallScreenNavBar";

const AppContainer = styled(Box)(() => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
}));

const OutletContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  justifyContent: "center",
  padding: theme.spacing(2),
  overflow: "auto",
}));

const ExtraSmallScreenAppLayout: React.FC = () => {
  return (
    <AppContainer>
      <ExtraSmallScreenTopBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>

      <ExtraSmallScreenNavBar />
    </AppContainer>
  );
};

export default ExtraSmallScreenAppLayout;
