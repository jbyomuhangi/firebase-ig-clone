import { Theme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultAppLayout from "./layouts/DefaultAppLayout";
import ExtraSmallScreenAppLayout from "./layouts/ExtraSmallScreenAppLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

const App: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const LayoutComponent = useMemo((): React.FC => {
    if (isExtraSmallScreen) return ExtraSmallScreenAppLayout;
    return DefaultAppLayout;
  }, [isExtraSmallScreen]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<HomePage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
