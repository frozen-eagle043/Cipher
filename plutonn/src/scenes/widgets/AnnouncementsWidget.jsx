import React from "react";
import { Card, CardContent, Typography, Divider } from "@mui/material";

const AnnouncementsWidget = () => {
  // Dummy announcements data
  const dummyAnnouncements = [
    {
      id: 1,
      title: "Important Announcement",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor arcu nec felis facilisis interdum.",
      date: "2023-08-15",
    },
    {
      id: 2,
      title: "Upcoming Event",
      content: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      date: "2023-08-20",
    },
    // ... add more dummy announcements
  ];

  return (
    <div>
      <Typography variant="h5" color="textPrimary" mb={2}>
        Announcements
      </Typography>
      {dummyAnnouncements.map((announcement) => (
        <Card key={announcement.id} variant="outlined" sx={{ mb: "1rem" }}>
          <CardContent>
            <Typography variant="h6" color="textPrimary">
              {announcement.title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {announcement.date}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" color="textPrimary">
              {announcement.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AnnouncementsWidget;
