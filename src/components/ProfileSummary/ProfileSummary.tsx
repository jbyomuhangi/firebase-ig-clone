import React from "react";
import { Box, styled, Avatar, Typography } from "@mui/material";

const ProfileSummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(10),
}));

const StyledAvatar = styled(Avatar)({
  height: "150px",
  width: "150px",
});

const SummaryContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const ProfileSummary: React.FC = () => {
  return (
    <ProfileSummaryContainer>
      <StyledAvatar />

      <SummaryContainer>
        <Typography>username goes here</Typography>
        <Typography>posts and follower content goes here</Typography>
        <Typography>Actual name of user</Typography>
      </SummaryContainer>
    </ProfileSummaryContainer>
  );
};

export default ProfileSummary;
