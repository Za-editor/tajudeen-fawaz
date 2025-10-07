import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import CursorFollower from "../components/CursorFollower";

const Layout = () => {
  return (
    <div className="">
      <CursorFollower />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
