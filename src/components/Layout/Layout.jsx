import Routers from "../../router/Routers";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main className="main">
        <Routers />
      </main>
    </>
  );
};

export default Layout;
