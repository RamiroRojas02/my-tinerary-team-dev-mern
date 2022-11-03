import logo from "./logo.svg";
import "./App.css";
import city from "./api/data-city.js";
import activity from "./api/data-city-activities.js";
import users from "./api/data-usuario.js";
import datosEventos from "./api/data-hoteles-eventos";
import dataAdmin from "./api/data-admin";
import datosHoteles from "./api/data-hoteles";
import Carrousel from "./components/Carrousel";
import FotosCarrousel from "./components/FotosCarrousel";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Home2 from "./components/Home2";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Header from "./components/HeaderComponent";
import Home1 from "./components/Home1";
import ScrollToTop from "./components/ScrollToTop";
import AutoToTop from "./components/AutoToTop";
function App() {
  let [state, setState] = useState("navBar-collapse");
  let menu = () => {
    if (state === "navBar-collapse") {
      setState((state = "navBar-expanded"));
    } else if (state === "navBar-expanded") {
      setState((state = "navBar-collapse"));
    }
  };
  return (
    <div>
      <AutoToTop />
      <Header click={menu} nav1={state} />
      <Home1 />
      <Home2 />
    </div>
  );
}

export default App;
