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
import { ComponentRoutes } from "./ComponentRoutes";

import { Route, Router, Routes, useNavigate } from "react-router-dom";

import Home from "./layout/Home";

function App() {
  let [stateNav, setState] = useState("navBar-collapse");
  let menu = () => {
    if (stateNav === "navBar-collapse") {
      setState((stateNav = "navBar-expanded"));
    } else if (stateNav === "navBar-expanded") {
      setState((stateNav = "navBar-collapse"));
    }
  };

  let [stateUser, setStateUser] = useState("user-collapse");
  let user = () => {
    if (stateUser === "user-collapse") {
      setStateUser((stateUser = "user-expanded"));
    } else if (stateUser === "user-expanded") {
      setStateUser((stateUser = "user-collapse"));
    }
  };

  return (

    <Layout
      menuEvent={menu}
      stateNav={stateNav}
      userEvent={user}
      stateUser={stateUser}
    >
      <ComponentRoutes/>

    </Layout>
    
  );
}

export default App;
