import React from "react";
import CallToAction from "./CallToAction";
import LogoSlogan from "./LogoSlogan";

import dataCity from "../api/data-city";
import datosHoteles from "../api/data-hoteles";

import { Link as LinkRoute } from "react-router-dom";

export default function Home1() {
  return (
    <div className="Home1">
      <LogoSlogan></LogoSlogan>
      <div className="sectionHome1">
        <LinkRoute to="/Cities">
          <CallToAction
            section="Cities"
            image={dataCity[0].photo}
            name={dataCity[0].name}
          />
        </LinkRoute>
        <LinkRoute to="Hotels">
          <CallToAction
            section="Hotels"
            image={datosHoteles[0].photo[0]}
            name={datosHoteles[0].name}
          />
        </LinkRoute>
      </div>
    </div>
  );
}
