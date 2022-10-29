import React from "react";

import { Box, styled } from "@mui/material";

const ImageTileContainer = styled(Box)({
  width: "200px",
  height: "200px",
  backgroundColor: "red",
  cursor: "pointer",
});

const ImageTile: React.FC = () => {
  return <ImageTileContainer>ImageTile</ImageTileContainer>;
};

export default ImageTile;
