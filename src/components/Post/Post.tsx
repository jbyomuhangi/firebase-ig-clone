import {
  Card,
  CardContent,
  CardMedia,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

import PostHeader from "./PostHeader";

const PostCardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "400px",
  boxShadow: "unset",
  border: `1px solid ${theme.palette.grey[300]}}`,
}));

const Post: React.FC = () => {
  return (
    <PostCardContainer>
      <PostHeader />

      <CardMedia
        component="img"
        height="400px"
        src="https://images.unsplash.com/photo-1666817963926-7a87a3dcf187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="Paella dish"
      />

      <CardContent>
        <Typography>hello there, this is the post body</Typography>
      </CardContent>
    </PostCardContainer>
  );
};

export default Post;
