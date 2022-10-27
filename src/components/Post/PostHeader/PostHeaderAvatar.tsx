import { Avatar, styled, Typography } from "@mui/material";
import React from "react";

const StyledAvatar = styled(Avatar)({ width: "30px", height: "30px" });

const PostHeaderAvatar: React.FC = () => {
  return (
    <StyledAvatar>
      <Typography>JB</Typography>
    </StyledAvatar>
  );
};

export default PostHeaderAvatar;
