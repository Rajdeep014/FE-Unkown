import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Login = lazy(() => import("../../Pages/Auth/Login"));
const Signup = lazy(() => import("../../Pages/Auth/Signup"));
const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
