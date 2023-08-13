import { Box, Typography, IconButton, useTheme } from "@mui/material";
import { PersonAddOutlined } from "@mui/icons-material";
import UserImage from "./UserImage";

const Friend = ({ name, subtitle, userPicturePath }) => {
  const { palette } = useTheme();
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const primaryDark = palette.primary.dark;

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box>
        <UserImage image={userPicturePath} size="55px" />
        <Typography color={main} variant="h5" fontWeight="500" sx={{ mt: "0.5rem" }}>
          {name}
        </Typography>
        <Typography color={medium} fontSize="0.75rem">
          {subtitle}
        </Typography>
      </Box>
      <IconButton aria-label="Add Friend" size="small" sx={{ color: primaryDark }}>
        <PersonAddOutlined />
      </IconButton>
    </Box>
  );
};

export default Friend;
