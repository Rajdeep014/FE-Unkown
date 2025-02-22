import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = false;
  
  return (
    <Box
      sx={{
        // width: "100%",
        backgroundColor: "black",
        height: "5rem",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "20px",
        marginBottom: "10px",
      }}
    >
      {/* Logo Section */}
      <Typography sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
        LOGO
      </Typography>

      {/* Navigation Links */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to={"/about"} style={{ color: "white", textDecoration: "none" }}>About</Link>
        <Link to={"/contact"} style={{ color: "white", textDecoration: "none" }}>Contact</Link>

        {/* Conditional Rendering for Login/Signup */}
        {!user && (
          <>
            <Button variant="contained" sx={{ backgroundColor: "white" }}>
              <Link to={"/login"} style={{ textDecoration: "none", color: "black" }}>Login</Link>
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "white" }}>
              <Link to={"/signup"} style={{ textDecoration: "none", color: "black" }}>Signup</Link>
            </Button>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
