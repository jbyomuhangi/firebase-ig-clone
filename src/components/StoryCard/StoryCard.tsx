import { Card, CardContent, styled } from "@mui/material";
import React from "react";

import StoryAvatar from "./StoryAvatar";

const StoryCardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  boxShadow: "unset",
  border: `1px solid ${theme.palette.grey[300]}}`,
}));

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
