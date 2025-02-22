import { Box, Button, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* 1st sec Introduction or Welcome */}
        <Grid
          container
          sx={{
            height: "40rem",
            backgroundImage:
              "url('https://wallpapercave.com/wp/wp6571984.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                color: "white",
                fontSize: "3rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                animation: "fadeIn 2s ease-in-out",
                textAlign: "center",
                paddingTop: "10rem",
              }}
            >
              WELCOME TO DEVOPS
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "#bbb",
                marginTop: "1rem",
                fontSize: "1.2rem",
                letterSpacing: "0.5px",
                opacity: 0,
                textAlign: "center",

                animation: "fadeIn 2s ease-in-out 1s forwards",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(10px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur exercitationem animi voluptatem corrupti accusantium
              temporibus aut dolorum fugit inventore soluta?
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                marginTop: "2rem",
              }}
            >
              <Button variant="contained" sx={{}}>
                Try New
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  marginLeft: "1rem",
                }}
              >
                Lets Go
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              height: "100%",
              padding: "2rem",
              paddingTop: "5rem",
              borderRadius: "10px",
            }}
          >
            <Box
              sx={{
                backgroundImage:
                  "url('https://learn.g2.com/hubfs/web_developer.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "30rem",
                // padding: "5rem",
              }}
            />
          </Grid>
        </Grid>
        {/* 2nd section */}
        <Grid container></Grid>
      </Box>
    </>
  );
};

export default Home;
