import { CardHeader } from "@mui/material";
import React from "react";

import PostHeaderAction from "./PostHeaderAction";
import PostHeaderAvatar from "./PostHeaderAvatar";
import PostHeaderTitle from "./PostHeaderTitle";

const PostHeader: React.FC = () => {
  return (
    <CardHeader
      avatar={<PostHeaderAvatar />}
      title={<PostHeaderTitle />}
      action={<PostHeaderAction />}
    />
  );
};

export default PostHeader;
