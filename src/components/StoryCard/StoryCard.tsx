import { Card, CardContent, styled } from "@mui/material";
import React from "react";

import StoryAvatar from "./StoryAvatar";

const StoryCardContainer = styled(Card)({ width: "100%", maxWidth: "400px" });

const StoryCardContent = styled(CardContent)({
  display: "flex",
  gap: "10px",
  overflow: "auto",

  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const StoryCard: React.FC = () => {
  return (
    <StoryCardContainer>
      <StoryCardContent>
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
        <StoryAvatar />
      </StoryCardContent>
    </StoryCardContainer>
  );
};

export default StoryCard;
