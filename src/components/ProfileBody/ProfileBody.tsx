import { Box, Button, styled, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

import ExtraSmallScreenStatSummary from "../ProfileSummary/ExtraSmallScreenProfileSummary/ExtraSmallScreenStatSummary";
import SquareGrid from "../SquareGrid";

const ProfileTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.grey[400]}`,
  gap: theme.spacing(2),
}));

const TabButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flex: 1,
  },
}));

const ProfileBody: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box>
      <Box>
        {isExtraSmallScreen && <ExtraSmallScreenStatSummary />}

        <ProfileTabsContainer>
          <TabButton>
            <Typography>Posts</Typography>
          </TabButton>

          <TabButton>
            <Typography>Saved</Typography>
          </TabButton>

          <TabButton>
            <Typography>Tagged</Typography>
          </TabButton>
        </ProfileTabsContainer>
      </Box>

      <SquareGrid />
    </Box>
  );
};

export default ProfileBody;
