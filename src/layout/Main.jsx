import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-410px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Main;
