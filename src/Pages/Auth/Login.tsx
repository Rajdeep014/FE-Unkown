import { Facebook, Google, Microsoft, Twitter } from "@mui/icons-material";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", {
        email,
        password,
      });

      const { access_token } = response.data; // Correct token key
      localStorage.setItem("token", access_token); // Store JWT in localStorage
      console.log("Login successful, token:", access_token);
      alert("Login successful!");

      navigate("/"); // Redirect to home page
    } catch (err) {
      setError("Invalid email or password"); // Show error message
      console.error("Login error:", err);
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: `url("https://images.freecreatives.com/wp-content/uploads/2016/04/Solid-Black-Website-Background.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Grid container spacing={4} justifyContent="center" maxWidth="lg">
        {/* Left Side - Login Form */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 4,
              borderRadius: 2,
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              boxShadow: `
      0px 0px 15px rgba(255, 255, 255, 0.2),
      0px 0px 30px rgba(255, 255, 255, 0.15)
    `,
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: `
        0px 0px 20px rgba(255, 255, 255, 0.3),
        0px 0px 35px rgba(255, 255, 255, 0.2)
      `,
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#fff", mb: 2 }}
            >
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                margin="normal"
                InputProps={{
                  sx: {
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
              />

              <TextField
                fullWidth
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                label="Password"
                margin="normal"
                InputProps={{
                  sx: {
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  py: 1,
                  fontSize: "1rem",
                  fontWeight: "bold",
                  backgroundColor: "#1976D2",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                }}
              >
                Login
              </Button>
            </form>
          </Paper>

          {/* Already Have an Account Box */}
          <Box sx={{ marginTop: 2 }}>
            <Paper
              sx={{
                padding: 4,
                borderRadius: 2,
                backgroundColor: "rgba(0, 0, 0, 0.85)",
                boxShadow: `
      0px 0px 15px rgba(255, 255, 255, 0.2),
      0px 0px 30px rgba(255, 255, 255, 0.15)
    `,
                transition: "0.3s ease-in-out",
                "&:hover": {
                  boxShadow: `
        0px 0px 20px rgba(255, 255, 255, 0.3),
        0px 0px 35px rgba(255, 255, 255, 0.2)
      `,
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontWeight: "500", textAlign: "center" }}
              >
                Already have an account?{" "}
                <Typography
                  component="a"
                  href="/signup"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Sign Up
                </Typography>
              </Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Right Side - Social Login */}
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              padding: 4,
              borderRadius: 2,
              height: "16rem",
              backgroundColor: "rgba(0, 0, 0, 0.85)",
              boxShadow: `
      0px 0px 15px rgba(255, 255, 255, 0.2),
      0px 0px 30px rgba(255, 255, 255, 0.15)
    `,
              transition: "0.3s ease-in-out",
              "&:hover": {
                boxShadow: `
        0px 0px 20px rgba(255, 255, 255, 0.3),
        0px 0px 35px rgba(255, 255, 255, 0.2)
      `,
              },
            }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                mt: 4,
                height: 40,
                backgroundColor: "#DB4437",
                color: "#fff",
                "&:hover": { backgroundColor: "#C1351D" },
              }}
              startIcon={<Google />}
            >
              Google
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                height: 40,
                backgroundColor: "#1877F2",
                color: "#fff",
                "&:hover": { backgroundColor: "#145DBF" },
              }}
              startIcon={<Facebook />}
            >
              Facebook
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                height: 40,
                backgroundColor: "#1DA1F2",
                color: "#fff",
                "&:hover": { backgroundColor: "#0D8BDA" },
              }}
              startIcon={<Twitter />}
            >
              Twitter
            </Button>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "#2F2F2F",
                height: 40,
                color: "#fff",
                "&:hover": { backgroundColor: "#1F1F1F" },
              }}
              startIcon={<Microsoft />}
            >
              Microsoft
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
