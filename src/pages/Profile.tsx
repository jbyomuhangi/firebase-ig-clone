import React from "react";
import { Box, styled } from "@mui/material";

import ProfileSummary from "../components/ProfileSummary";
import ProfileBody from "../components/ProfileBody";

const ProfileContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
}));

const ProfileContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  maxWidth: "640px",
  gap: theme.spacing(10),
}));

const Profile: React.FC = () => {
  return (
    <ProfileContainer>
      <ProfileContentContainer>
        <ProfileSummary />
        <ProfileBody />
      </ProfileContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
