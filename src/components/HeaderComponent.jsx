import React from "react";
import NavBar from "./NavBar";
import { Link as LinkRoute } from "react-router-dom";
export default function HeaderComponent(props) {
  let { clickNav, nav1, userState, clickUser } = props;

  return (
    <header className="header">
      <img
        onClick={clickUser}
        className="user"
        src="/img/user-circle-solid-240.png"
        alt="user"
      ></img>
      <div className={userState}>
        <LinkRoute to="/SignIn">
          Sign in
        </LinkRoute>
        <LinkRoute to="/SignUp">
          Sign Up
        </LinkRoute>
      </div>
      <img className="logo" src="/img/My_Tinerary.png" alt="Logo"></img>
      <img
        onClick={clickNav}
        className="menuNav"
        src="/img/colapseBar.png"
        alt="bar"
      ></img>

      <NavBar naV={nav1} />
    </header>
  );
}
