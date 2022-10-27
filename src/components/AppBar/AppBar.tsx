import { Box, styled, Typography } from "@mui/material";
import React from "react";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "sticky",
  top: 0,
  zIndex: 100,
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  justifyContent: "space-between",
}));

const AppBar: React.FC = () => {
  return (
    <StyledBox>
      <Typography>Firebase Instagram Clone</Typography>
      <Typography>Search bar goes here</Typography>
      <Typography>A bunch of icons here</Typography>
    </StyledBox>
  );
};

export default AppBar;
