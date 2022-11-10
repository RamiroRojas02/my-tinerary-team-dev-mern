import React from "react";
import { Link as LinkRoute } from "react-router-dom";

export default function NavBar({ naV }) {
  return (
    <nav className={`${naV}`}>
      <LinkRoute to="/">
        Home
      </LinkRoute>
      <LinkRoute to="/Hotels">
        Hotel
      </LinkRoute>
      <LinkRoute to="/Cities">
        City
      </LinkRoute>
      <LinkRoute to="/NewHotel">

        New Hotel

      </LinkRoute>
      <LinkRoute to="/NewCity">
        New City
      </LinkRoute>
    </nav>
  );
}
