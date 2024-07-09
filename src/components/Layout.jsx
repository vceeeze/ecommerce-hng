// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";
import Footer from "./Footer";


const Layout = () => {
  return (
    <div>
      <Hero />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
