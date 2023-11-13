import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import City from "../pages/City";
import Login from "../pages/Login";
import Register from "../pages/Register";
import State from "../pages/State";
import SideBar from "../components/SideBar/SideBar";
import Monitoramento from "../pages/Monitoramento";
import Consorcio from "../pages/Consorcio";
import Maps from "../pages/Maps";

import Economia from "../pages/dashboardPages/Economia";
import GerenUrbano from "../pages/dashboardPages/GerenUrbano";
import Inovacoes from "../pages/dashboardPages/Inovacoes";
import MeioAmbiente from "../pages/dashboardPages/MeioAmbiente";

const WithSideBar = ({ openSidebarToggle, children }) => (
  <div>
    <SideBar openSidebarToggle={openSidebarToggle}  />
    { children }
  </div>
);

const Routers = ({ openSidebarToggle }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/city" element={<City />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/state" element={<State />} />
      <Route path="/monitoramento" element={<Monitoramento />} />
      <Route path="/consorcio" element={<Consorcio />} />
      <Route path="/maps" element={<Maps />} />

      <Route path="/dashboard" element={<WithSideBar openSidebarToggle={openSidebarToggle}><Dashboard /></WithSideBar>} />
      <Route path="/economia" element={<WithSideBar openSidebarToggle={openSidebarToggle}><Economia /></WithSideBar>} />
      <Route path="/genurbano" element={<WithSideBar openSidebarToggle={openSidebarToggle}><GerenUrbano /></WithSideBar>} />
      <Route path="/inovacoes" element={<WithSideBar openSidebarToggle={openSidebarToggle}><Inovacoes /></WithSideBar>} />
      <Route path="/meioambiente" element={<WithSideBar openSidebarToggle={openSidebarToggle}><MeioAmbiente /></WithSideBar>} />
    </Routes>
  );
};

export default Routers;
