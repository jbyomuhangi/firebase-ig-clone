import React from "react";

import { Avatar, styled, Box, Typography } from "@mui/material";

const StoryAvatarContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "5px",
});

const StyledStoryAvatar = styled(Avatar)({ cursor: "pointer" });

const StoryAvatar: React.FC = () => {
  return (
    <StoryAvatarContainer>
      <StyledStoryAvatar />
      <Typography>username</Typography>
    </StoryAvatarContainer>
  );
};

export default StoryAvatar;
