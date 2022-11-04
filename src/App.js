
import "./App.css";

import Layout from "./layout/Layout";
import {  useState } from "react";


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
    <Layout menuEvent={menu} stateNav={stateNav} userEvent={user} stateUser={stateUser} >
      <Home/>
    </Layout>
  );
}

export default App;
