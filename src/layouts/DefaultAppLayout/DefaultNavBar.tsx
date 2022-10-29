import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  AppNavButtonInterface,
  defaultNavBarButtons,
} from "../../utils/appNavUtils";

const DefaultNavBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 0,
  width: "100%",
  maxWidth: "200px",
  height: "100vh",
  backgroundColor: theme.palette.common.white,
  borderRight: `1px solid ${theme.palette.grey[400]}`,
}));

const DefaultNavBarContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const NavButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(5),
}));

const NavButtonComponent = styled(Button)(() => ({
  "&.MuiButton-root": {
    justifyContent: "flex-start",
  },
}));

const DefaultNavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (button: AppNavButtonInterface): void => {
    navigate(button.path);
  };

  return (
    <DefaultNavBarContainer>
      <DefaultNavBarContentContainer>
        <Typography>Firebase Instagram Clone</Typography>

        <NavButtonContainer>
          {defaultNavBarButtons.map((button) => {
            return (
              <NavButtonComponent
                key={button.name}
                onClick={() => handleNavigate(button)}
                startIcon={button.startIcon}
              >
                {button.name}
              </NavButtonComponent>
            );
          })}
        </NavButtonContainer>
      </DefaultNavBarContentContainer>
    </DefaultNavBarContainer>
  );
};

export default DefaultNavBar;
