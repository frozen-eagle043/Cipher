import React from "react";
import { Card, CardContent, Typography, IconButton, Divider, Stack } from "@mui/material";
import { ThumbUpOutlined, ChatBubbleOutlineOutlined } from "@mui/icons-material";

const PostWidget = ({
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
}) => {
  return (
    <Card variant="outlined" sx={{ mb: "1rem" }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
          <img src={userPicturePath} alt="User" style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "1rem" }} />
          <Typography variant="h6" color="textPrimary">
            {name}
          </Typography>
        </div>
        {picturePath && (
          <div style={{ marginBottom: "1rem" }}>
            <img src={picturePath} alt="Post" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        )}
        <Typography variant="body1" color="textPrimary">
          {description}
        </Typography>
        {location && (
          <Typography variant="body2" color="textSecondary">
            Location: {location}
          </Typography>
        )}
        <Divider sx={{ my: 1 }} />
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton size="small" color="primary">
            <ThumbUpOutlined fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {likes} Likes
          </Typography>
          <IconButton size="small" color="primary">
            <ChatBubbleOutlineOutlined fontSize="small" />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {comments} Comments
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PostWidget;
