import { Home as HomeIcon } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

export interface AppNavButtonInterface {
  name: string;
  path: string;
  startIcon: React.ReactNode;
}

const appNavButtonMap: { [key: string]: AppNavButtonInterface } = {
  home: {
    name: "Home",
    path: "/",
    startIcon: <HomeIcon sx={{ height: "25px", width: "25px" }} />,
  },

  profile: {
    name: "Profile",
    path: "/profile/joel",
    startIcon: <Avatar sx={{ height: "25px", width: "25px" }} />,
  },
};

export const defaultNavBarButtons: AppNavButtonInterface[] = [
  appNavButtonMap["home"],
  appNavButtonMap["profile"],
];

export const extraSmallScreenNavBarButtons: AppNavButtonInterface[] = [
  appNavButtonMap["home"],
  appNavButtonMap["profile"],
];
