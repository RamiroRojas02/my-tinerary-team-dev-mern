import React from "react";
import CallToAction from "./CallToAction";
import LogoSlogan from "./LogoSlogan";


import dataCity from "../api/data-city";



import { Link as LinkRoute } from "react-router-dom";


export default function Home1(props) {
  let {hotel} = props
  
  

  
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
            image={hotel.length === 0 ? "loading":hotel[0].photo[0]}
            name={hotel.length === 0 ? "loading" :hotel[0].name }
          />
        </LinkRoute>
      </div>
    </div>
  );
}
