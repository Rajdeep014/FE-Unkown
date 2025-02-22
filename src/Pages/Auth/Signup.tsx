import { Facebook, Google, Microsoft, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  interface SignupData {
    full_name: string;
    email: string;
    password: string;
    phone?: string;
  }

  interface ErrorResponse {
    response?: {
      data?: {
        detail?: string;
      };
    };
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const signupData: SignupData = {
      full_name: fullName,
      email,
      password,
      ...(phone && { phone }),
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/users/",
        signupData
      );

      alert("Signup successful! Redirecting to login...");
      navigate("/login");
    } catch (err) {
      const errorResponse = err as ErrorResponse;
      if (errorResponse.response) {
        setError(errorResponse.response.data?.detail || "Something went wrong");
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
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
              Sign Up
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="text"
                value={fullName}
                placeholder="Enter Your Full Name"
                onChange={(e) => setFullName(e.target.value)}
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
                type="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
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
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                margin="normal"
                InputProps={{
                  sx: {
                    height: 40,
                    backgroundColor: "#fff",
                    borderRadius: 1,
                  },
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    sx={{ color: "#fff" }}
                  />
                }
                label={
                  <Typography sx={{ color: "#fff" }}>
                    I agree to the Terms and Conditions
                  </Typography>
                }
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
                Sign Up
              </Button>
            </form>
          </Paper>
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
                  href="/login"
                  sx={{
                    color: "primary.main",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  Login
                </Typography>
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper
            sx={{
              padding: 4,
              borderRadius: 2,
              height: "26rem",
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
                mt: 13,
                height: 40,
                backgroundColor: "#DB4437",
                color: "#fff",
              }}
              startIcon={<Google />}
            >
              {" "}
              Google{" "}
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                height: 40,
                backgroundColor: "#1877F2",
                color: "#fff",
              }}
              startIcon={<Facebook />}
            >
              {" "}
              Facebook{" "}
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mb: 2,
                height: 40,
                backgroundColor: "#1DA1F2",
                color: "#fff",
              }}
              startIcon={<Twitter />}
            >
              {" "}
              Twitter{" "}
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ backgroundColor: "#2F2F2F", height: 40, color: "#fff" }}
              startIcon={<Microsoft />}
            >
              {" "}
              Microsoft{" "}
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Signup;
