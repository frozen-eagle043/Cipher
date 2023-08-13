import React from "react";
import { Card, CardContent, Typography, Divider, Button } from "@mui/material";

const CommunitiesWidget = () => {
  // Dummy communities data
  const dummyCommunities = [
    {
      id: 1,
      name: "Programming Enthusiasts",
      members: 1000,
      description: "A community for passionate programmers.",
      isFollowed: false,
    },
    {
      id: 2,
      name: "Space Explorers",
      members: 500,
      description: "Discuss the wonders of outer space.",
      isFollowed: true,
    },
    // ... add more dummy communities
  ];

  const handleFollowClick = (communityId) => {
    // Update the 'isFollowed' property of the community
    // based on the communityId and manage state or dispatch action
  };

  return (
    <div>
      <Typography variant="h5" color="textPrimary" mb={2}>
        Popular Communities
      </Typography>
      {dummyCommunities.map((community) => (
        <Card key={community.id} variant="outlined" sx={{ mb: "1rem" }}>
          <CardContent>
            <Typography variant="h6" color="textPrimary">
              {community.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {community.members} Members
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" color="textPrimary">
              {community.description}
            </Typography>
            <Button
              variant={community.isFollowed ? "outlined" : "contained"}
              color="primary"
              onClick={() => handleFollowClick(community.id)}
              sx={{ marginTop: "1rem" }}
            >
              {community.isFollowed ? "Unfollow" : "Follow"}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CommunitiesWidget;
