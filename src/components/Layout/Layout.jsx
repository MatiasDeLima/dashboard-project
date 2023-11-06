import Routers from "../../router/Routers";
import Header from "../Header/Header";

import { useState } from "react";

const Layout = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <>
      <Header OpenSidebar={OpenSidebar}/>
      <main className="main">
        <Routers openSidebarToggle={openSidebarToggle} />
      </main>
    </>
  );
};

export default Layout;
