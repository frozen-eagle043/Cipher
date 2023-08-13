import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "state";

const FriendListWidget = () => {
  //const dispatch = useDispatch();
  const { palette } = useTheme();
  //const friends = useSelector((state) => state.user.friends);

  // Replace actual API call with fake data
  const fakeFriendsData = [
    {
      _id: 1,
      firstName: "Alice",
      lastName: "Smith",
      occupation: "Software Engineer",
      picturePath: "/path/to/picture1.jpg",
    },
    {
      _id: 2,
      firstName: "Bob",
      lastName: "Johnson",
      occupation: "Data Scientist",
      picturePath: "/path/to/picture2.jpg",
    },
    {
      _id: 3,
      firstName: "Alice",
      lastName: "Smith",
      occupation: "Software Engineer",
      picturePath: "/path/to/picture1.jpg",
    },
    {
      _id: 4,
      firstName: "Alice",
      lastName: "Smith",
      occupation: "Software Engineer",
      picturePath: "/path/to/picture1.jpg",
    },
    
  ];

  //useEffect(() => {
    // Dispatch the fake data to the Redux store
  //   dispatch(setFriends({ friends: fakeFriendsData }));
  // }, [dispatch]);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {fakeFriendsData.map((friend) => (
          <Friend
            key={friend._id}
            friendId={friend._id}
            name={`${friend.firstName} ${friend.lastName}`}
            subtitle={friend.occupation}
            userPicturePath={friend.picturePath}
          />
        ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendListWidget;
