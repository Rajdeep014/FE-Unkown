import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "20rem",
        borderRadius: "20px",
        padding: "20px",
        display: "flex",
        marginTop: "10px",
      }}
    >
      <Box width={"20%"}>
        <Typography textAlign={"center"} variant="h2" color="white">
          Logo
        </Typography>
        <Typography variant="h8" textAlign={"center"} color="white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          tempore facilis rem tenetur temporibus doloribus. Nihil recusandae
          quasi neque aliquid deleniti iusto consectetur aspernatur provident ab
          aperiam dignissimos, officiis accusantium molestias architecto
          praesentium incidunt saepe ea illo magni? Sit dicta dignissimos
          aliquam unde recusandae iure quia ipsam minima rem labore!
        </Typography>
        <Box
          sx={{
            display: "flex",
            marginTop: "1rem",
          }}
        >
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "white",
              height: "4rem",
              width: "4rem",
            }}
          >
            Insta
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "white",
              height: "4rem",
              width: "4rem",
              marginLeft: "1rem",
            }}
          >
            Insta
          </Box>
          <Box
            sx={{
              borderRadius: "50%",
              backgroundColor: "white",
              height: "4rem",
              width: "4rem",
              marginLeft: "1rem",
            }}
          >
            Insta
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Footer;
