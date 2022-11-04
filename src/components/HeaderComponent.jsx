import React from "react";
import NavBar from "./NavBar";
export default function HeaderComponent(props) {
  let { clickNav, nav1 , userState, clickUser} = props;


  return (
    <header className="header">
      <img
        onClick={clickUser}
        className="user"
        src="/img/user-circle-solid-240.png"
        alt="user"
      ></img>
      <div className={userState}>
        <a href="/">Sign in</a>
        <a href="/">Sign Up</a>
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
