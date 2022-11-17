import React from "react";
import city from "../api/data-city.js";
import activity from "../api/data-city-activities.js";
import users from "../api/data-usuario.js";
import datosEventos from "../api/data-hoteles-eventos";
import dataAdmin from "../api/data-admin";
import datosHoteles from "../api/data-hoteles";
import Carrousel from "./Carrousel";
import FotosCarrousel from "./FotosCarrousel";
import { useEffect, useState } from "react";
export default function Home2(props) {
  let {hotel} = props
  /* CARROUSEL FUNCTIONS */
  let [estilazo1, setEstilazo1] = useState("show");
  let [estilazo2, setEstilazo2] = useState("hide");
  let [estilazo3, setEstilazo3] = useState("hide");
  let [id, setId] = useState(0);
  useEffect(() => {
    let idInterval = setInterval(() => {
      next();
    }, 5000);
    setId(idInterval);
    return clearInterval(id);
  }, [estilazo1, estilazo2, estilazo3]);
  let next = () => {

    if (estilazo1 == "show" && estilazo2 == "hide" && estilazo3 == "hide") {
      setEstilazo1((estilazo1 = "hide"));
      setEstilazo2((estilazo2 = "show"));
      setEstilazo3((estilazo3 = "hide"));
    } else if (
      estilazo1 == "hide" &&
      estilazo2 == "show" &&
      estilazo3 == "hide"
    ) {
      setEstilazo1((estilazo1 = "hide"));
      setEstilazo2((estilazo2 = "hide"));
      setEstilazo3((estilazo3 = "show"));
    } else if (
      estilazo1 == "hide" &&
      estilazo2 == "hide" &&
      estilazo3 == "show"
    ) {
      setEstilazo1((estilazo1 = "show"));
      setEstilazo2((estilazo2 = "hide"));
      setEstilazo3((estilazo3 = "hide"));
    }
    clearInterval(id);
  };
  let prev = () => {
    console.log(estilazo1);
    if (estilazo1 === "show" && estilazo2 === "hide" && estilazo3 === "hide") {
      setEstilazo1((estilazo1 = "hide"));
      setEstilazo2((estilazo2 = "hide"));
      setEstilazo3((estilazo3 = "show"));
    } else if (
      estilazo1 === "hide" &&
      estilazo2 === "hide" &&
      estilazo3 === "show"
    ) {
      setEstilazo1((estilazo1 = "hide"));
      setEstilazo2((estilazo2 = "show"));
      setEstilazo3((estilazo3 = "hide"));
    } else if (
      estilazo1 === "hide" &&
      estilazo2 === "show" &&
      estilazo3 === "hide"
    ) {
      setEstilazo1((estilazo1 = "show"));
      setEstilazo2((estilazo2 = "hide"));
      setEstilazo3((estilazo3 = "hide"));
    }
    clearInterval(id);
  };
  /* HASTA ACA CARROUSEL FUNCTIONS */
  /* FOOTER */

  return (
    <div className="Home2">
      <Carrousel
        hotels={hotel}
        estilo1={estilazo1}
        estilo2={estilazo2}
        estilo3={estilazo3}
        change={next}
        change2={prev}
      ></Carrousel>
    </div>
  );
}
