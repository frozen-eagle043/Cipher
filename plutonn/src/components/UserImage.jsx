import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src='https://static.wikia.nocookie.net/marveldatabase/images/5/5f/Timeless_Vol_1_1_Textless.jpg/revision/latest?cb=20211209001859'
      />
    </Box>
  );
};

export default UserImage;