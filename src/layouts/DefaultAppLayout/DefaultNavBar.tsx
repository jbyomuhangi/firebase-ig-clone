import { Box, Button, styled, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
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

  [theme.breakpoints.down("lg")]: {
    width: "fit-content",
  },
}));

const DefaultNavBarContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),

  [theme.breakpoints.down("lg")]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const NavButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  marginTop: theme.spacing(5),
}));

const NavButtonComponent = styled(Button)(({ theme }) => ({
  "&.MuiButton-root": {
    justifyContent: "flex-start",
  },

  [theme.breakpoints.down("lg")]: {
    "&.MuiButton-root": {
      justifyContent: "center",
      minWidth: "30px",
    },
  },
}));

const DefaultNavBar: React.FC = () => {
  const navigate = useNavigate();
  const isMediumScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("lg")
  );

  const handleNavigate = (button: AppNavButtonInterface): void => {
    navigate(button.path);
  };

  return (
    <DefaultNavBarContainer>
      <DefaultNavBarContentContainer>
        {isMediumScreen ? (
          <Typography>FIC</Typography>
        ) : (
          <Typography>Firebase Instagram Clone</Typography>
        )}

        <NavButtonContainer>
          {defaultNavBarButtons.map((button) => {
            return (
              <NavButtonComponent
                key={button.name}
                onClick={() => handleNavigate(button)}
                startIcon={isMediumScreen ? null : button.startIcon}
              >
                {isMediumScreen ? button.startIcon : button.name}
              </NavButtonComponent>
            );
          })}
        </NavButtonContainer>
      </DefaultNavBarContentContainer>
    </DefaultNavBarContainer>
  );
};

export default DefaultNavBar;
