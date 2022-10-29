import { Box, styled, IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppNavButtonInterface,
  extraSmallScreenNavBarButtons,
} from "../../utils/appNavUtils";

const ExtraSmallScreenNavBarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `1px solid ${theme.palette.grey[400]}`,
}));

const ExtraSmallScreenNavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (button: AppNavButtonInterface): void => {
    navigate(button.path);
  };

  return (
    <ExtraSmallScreenNavBarContainer>
      {extraSmallScreenNavBarButtons.map((button) => {
        return (
          <IconButton key={button.name} onClick={() => handleNavigate(button)}>
            {button.startIcon}
          </IconButton>
        );
      })}
    </ExtraSmallScreenNavBarContainer>
  );
};

export default ExtraSmallScreenNavBar;
