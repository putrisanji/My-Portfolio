import React from "react";

import Home from "../Component/Home/Home";
import Navbar from "../Component/Navbar/Navbar";
import Portfolio from "../Component/Portfolio/Portfolio";
import Profile from "../Component/Profile/Profile";
import Contact from "../Component/Contact/Contact";

function Layout() {
  return (
    <>
        <Navbar/>
        <Home/>
        <Profile/>
        <Portfolio/>
        <Contact/>

    </>
  );
}

export default Layout;
