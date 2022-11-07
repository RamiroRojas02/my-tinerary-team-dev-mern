import React from "react";
import Footer from "../components/Footer";
import HeaderComponent from "../components/HeaderComponent";
import AutoToTop from "../components/AutoToTop";
import ScrollToTop from "../components/ScrollToTop";

import { Route, Router, Routes, useNavigate } from "react-router-dom";

export default function layout(props) {
  let { menuEvent, stateNav,  userEvent , stateUser } = props;


  return (
    <div className="layout">
      <AutoToTop />
      <HeaderComponent clickNav={menuEvent} nav1={stateNav} clickUser= {userEvent} userState={stateUser} />
      {props.children}
      <Footer />
      
    </div>
  );
}
