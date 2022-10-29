import { Box, styled, Typography } from "@mui/material";
import React from "react";

const ExtraSmallScreenTopBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: `1px solid ${theme.palette.grey[400]}`,
}));

const ExtraSmallScreenTopBar: React.FC = () => {
  return (
    <ExtraSmallScreenTopBarContainer>
      <Typography>Firebase Instagram Clone</Typography>
    </ExtraSmallScreenTopBarContainer>
  );
};

export default ExtraSmallScreenTopBar;
