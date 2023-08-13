import { Box, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/UserWidget";
import { Tab, Tabs } from "@mui/material";
import PostsWidget from "scenes/widgets/PostsWidget";
import AnnouncementsWidget from "scenes/widgets/AnnouncementsWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import CommunitiesWidget from "scenes/widgets/CommunitiesWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const [_id, picturePath] = [1, '/assets/p11.jpeg']; // Placeholder values

  const [selectedTab, setSelectedTab] = useState("posts"); // Initialize the selected tab state

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "20%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
          <FriendListWidget />
        </Box>
        <Box flexBasis={isNonMobileScreens ? "55%" : undefined}>
          <Tabs value={selectedTab} onChange={handleTabChange} indicatorColor="primary">
            <Tab value="posts" label="Posts" />
            <Tab value="announcements" label="Announcements" />
          </Tabs>
          {selectedTab === "posts" ? <PostsWidget /> : <AnnouncementsWidget />} {/* Toggle between PostsWidget and AnnouncementsWidget */}
        </Box>
        <Box flexBasis={isNonMobileScreens ? "20%" : undefined}>
          <CommunitiesWidget />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;