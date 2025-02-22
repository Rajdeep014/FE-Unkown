import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../../Components/Layout/Footer";
import Navbar from "../../Components/Layout/Navbar";
import ProtectRoute from "../../Components/Security/ProtectRoute";

const Login = lazy(() => import("../../Pages/Auth/Login"));
const Signup = lazy(() => import("../../Pages/Auth/Signup"));
const Home = lazy(() => import("../../Pages/Home/Home"));
const About = lazy(() => import("../../Pages/Home/About"));
const Contact = lazy(() => import("../../Pages/Home/Contact"));
const AppRoutes: React.FC = () => {
  const user = true;
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route element={<ProtectRoute user={user} />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default AppRoutes;
