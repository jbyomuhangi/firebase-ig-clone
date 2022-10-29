import React from "react";
import { Box, styled } from "@mui/material";

import ImageTile from "./ImageTile";

const ProfileBodyContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
});

const ProfileBody: React.FC = () => {
  return (
    <ProfileBodyContainer>
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
    </ProfileBodyContainer>
  );
};

export default ProfileBody;
