import { Box, Button, styled, Theme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";

// import ImageTile from "./ImageTile";
import ExtraSmallScreenStatSummary from "../ProfileSummary/ExtraSmallScreenProfileSummary/ExtraSmallScreenStatSummary";

type ProfileTab = {
  name: string;
};

const ProfileTabsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  borderTop: `1px solid ${theme.palette.grey[400]}`,
  gap: theme.spacing(2),
}));

const profileTabs: ProfileTab[] = [
  { name: "Posts" },
  { name: "Saved" },
  { name: "Tagged" },
];

const ProfileBody: React.FC = () => {
  const isExtraSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box>
      <Box>
        {isExtraSmallScreen && <ExtraSmallScreenStatSummary />}

        <ProfileTabsContainer>
          {profileTabs.map((tab) => {
            return (
              <Button key={tab.name} sx={{ flex: { xs: 1, sm: "unset" } }}>
                <Typography>{tab.name}</Typography>
              </Button>
            );
          })}
        </ProfileTabsContainer>
      </Box>

      {/* <ProfilePostsContainer>
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
      </ProfilePostsContainer> */}
    </Box>
  );
};

export default ProfileBody;
