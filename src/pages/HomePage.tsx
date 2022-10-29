import { Box, styled } from "@mui/material";
import React from "react";

import Post from "../components/Post";
import StoryCard from "../components/StoryCard";

const HopePageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  paddingBottom: "20px",
});

const HomePage: React.FC = () => {
  return (
    <HopePageContainer>
      <StoryCard />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </HopePageContainer>
  );
};

export default HomePage;
