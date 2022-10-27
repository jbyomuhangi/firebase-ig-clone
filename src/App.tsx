import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import Post from "./components/Post";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Post />
    </ThemeProvider>
  );
};

export default App;
