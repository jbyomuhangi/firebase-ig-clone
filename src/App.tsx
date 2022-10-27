import { ThemeProvider } from "@mui/material/styles";
import React from "react";

import AppBar from "./components/AppBar";
import Post from "./components/Post";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Post />
      <Post />
      <Post />
    </ThemeProvider>
  );
};

export default App;
