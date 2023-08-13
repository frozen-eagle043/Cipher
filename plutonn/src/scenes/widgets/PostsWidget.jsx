import React from "react";
import { useSelector } from "react-redux";
import PostWidget from "./PostWidget";

const PostsWidget = ({ isProfile = false }) => {
  // Dummy posts data
  const dummyPosts = [
    {
      _id: 1,
      userId: 101,
      firstName: "John",
      lastName: "Doe",
      description: "This is a dummy post.",
      location: "Somewhere",
      picturePath: "/path/to/post/image1.jpg",
      userPicturePath: "/path/to/user/image1.jpg",
      likes: 5,
      comments: 2,
    },
    {
      _id: 2,
      userId: 102,
      firstName: "Jane",
      lastName: "Smith",
      description: "Another dummy post.",
      location: "Nowhere",
      picturePath: "/path/to/post/image2.jpg",
      userPicturePath: "/path/to/user/image2.jpg",
      likes: 10,
      comments: 3,
    },
    // ... add more dummy posts
  ];

 

  return (
    <>
      {dummyPosts.map(
            ({
              _id,
              userId,
              firstName,
              lastName,
              description,
              location,
              picturePath,
              userPicturePath,
              likes,
              comments,
            }) => (
              <PostWidget
                key={_id}
                postId={_id}
                postUserId={userId}
                name={`${firstName} ${lastName}`}
                description={description}
                location={location}
                picturePath={picturePath}
                userPicturePath={userPicturePath}
                likes={likes}
                comments={comments}
              />
            )
          )
       }
    </>
  );
};

export default PostsWidget;
