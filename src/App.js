import logo from "./logo.svg";
import "./App.css";
import city from "./api/data-city.js";
import activity from "./api/data-city-activities.js";
import users from "./api/data-usuario.js";
import datosEventos from "./api/data-hoteles-eventos";
import dataAdmin from "./api/data-admin";
import datosHoteles from "./api/data-hoteles";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";

import { Route, Router, Routes, useNavigate } from "react-router-dom";

import Home from "./layout/Home";
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
    <Layout menu={menu} state={state}>
      <Home/>
    </Layout>
  );
}

export default App;
