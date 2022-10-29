import React from "react";
import { Box, styled, Typography } from "@mui/material";

import ImageTile from "./ImageTile";

type ProfileTab = {
  name: string;
};

const ProfileTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.grey[400]}`,
  gap: theme.spacing(2),
}));

const ProfileTabContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  cursor: "pointer",
}));

const ProfilePostsContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
});

const profileTabs: ProfileTab[] = [
  { name: "Posts" },
  { name: "Saved" },
  { name: "Tagged" },
];

const ProfileBody: React.FC = () => {
  return (
    <Box>
      <ProfileTabsContainer>
        {profileTabs.map((tab) => {
          return (
            <ProfileTabContainer key={tab.name}>
              <Typography>{tab.name}</Typography>
            </ProfileTabContainer>
          );
        })}
      </ProfileTabsContainer>

      <ProfilePostsContainer>
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
        <ImageTile />
      </ProfilePostsContainer>
    </Box>
  );
};

export default ProfileBody;
