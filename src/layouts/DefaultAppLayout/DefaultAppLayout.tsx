import { Box, styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

import DefaultNavBar from "./DefaultNavBar";

const AppContainer = styled(Box)(() => ({
  display: "flex",
}));

const OutletContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flex: 1,
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const DefaultAppLayout: React.FC = () => {
  return (
    <AppContainer>
      <DefaultNavBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </AppContainer>
  );
};

export default DefaultAppLayout;
