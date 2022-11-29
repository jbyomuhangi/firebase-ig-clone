import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import ExtraSmallScreenTopBar from "./ExtraSmallScreenTopBar";
import ExtraSmallScreenNavBar from "./ExtraSmallScreenNavBar";

const AppContainer = styled(Box)(() => ({
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
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    const documentHeight = () => setHeight(() => `${window.innerHeight}px`);
    setHeight(() => `${window.innerHeight}px`);

    window.addEventListener("resize", documentHeight);
    return () => window.removeEventListener("resize", documentHeight);
  }, []);

  return (
    <AppContainer sx={{ height }}>
      <ExtraSmallScreenTopBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>

      <ExtraSmallScreenNavBar />
    </AppContainer>
  );
};

export default ExtraSmallScreenAppLayout;
