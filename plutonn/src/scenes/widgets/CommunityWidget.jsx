import React from "react";
import { Card, CardContent, Typography, Divider, Button, Stack } from "@mui/material";

const CommunityWidget = ({ name, members, description }) => {
  const handleFollow = () => {
    // Implement follow functionality here
  };

  return (
    <Card variant="outlined" sx={{ mb: "1rem" }}>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {members} Members
        </Typography>
        <Divider sx={{ my: 1 }} />
        <Typography variant="body1" color="textPrimary">
          {description}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" mt={2}>
          <Button variant="outlined" size="small" onClick={handleFollow}>
            Follow
          </Button>
          {/* Add more buttons or actions as needed */}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CommunityWidget;
