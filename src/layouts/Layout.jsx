import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const Layout = () => {
  return (
    <div className="px-[15px] md:px-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
