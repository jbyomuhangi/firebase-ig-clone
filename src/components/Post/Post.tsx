import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@mui/material";
import React from "react";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";

import "./Post.css";

const Post: React.FC = () => {
  return (
    <Card classes={{ root: "post__card" }}>
      <CardHeader
        avatar={<Avatar classes={{ root: "post_avatar" }}>JB</Avatar>}
        title="jbyomuhangi"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardMedia
        component="img"
        height="400px"
        src="https://images.unsplash.com/photo-1666817963926-7a87a3dcf187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="Paella dish"
      />

      <CardContent>hello there, this is the post body </CardContent>
    </Card>
  );
};

export default Post;
