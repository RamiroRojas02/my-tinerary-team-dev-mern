import React from "react";
import Footer from "../components/Footer";
import HeaderComponent from "../components/HeaderComponent";
import AutoToTop from "../components/AutoToTop";
import ScrollToTop from "../components/ScrollToTop";

import { Route, Router, Routes, useNavigate } from "react-router-dom";

export default function layout(props) {
  let { menu, state } = props;

  return (
    <div className="layout">
      <AutoToTop />
      <HeaderComponent click={menu} nav1={state} />
      {props.children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
