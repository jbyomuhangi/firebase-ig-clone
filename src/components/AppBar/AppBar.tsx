import { Box, styled, Typography, Button, Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home as HomeIcon } from "@mui/icons-material";

type NavButton = {
  name: string;
  path: string;
  startIcon: React.ReactNode;
};

const AppBarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "sticky",
  top: 0,
  width: "100%",
  maxWidth: "200px",
  height: "100vh",
  backgroundColor: theme.palette.common.white,
}));

const AppBarContentContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const NavContainer = styled(Box)(({ theme }) => ({
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

const AppBar: React.FC = () => {
  const navigate = useNavigate();

  const navButtons: NavButton[] = [
    {
      name: "Home",
      path: "/",
      startIcon: <HomeIcon sx={{ height: "25px", width: "25px" }} />,
    },
    {
      name: "Profile",
      path: "/profile/joel",
      startIcon: <Avatar sx={{ height: "25px", width: "25px" }} />,
    },
  ];

  const handleNavigate = (button: NavButton): void => {
    navigate(button.path);
  };

  return (
    <AppBarContainer>
      <AppBarContentContainer>
        <Typography>Firebase Instagram Clone</Typography>

        <NavContainer>
          {navButtons.map((button) => {
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
        </NavContainer>
      </AppBarContentContainer>
    </AppBarContainer>
  );
};

export default AppBar;
