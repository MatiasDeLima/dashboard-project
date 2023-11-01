import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default Routers;