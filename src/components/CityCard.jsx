import React from "react";
import { Link as LinkRoute } from "react-router-dom";

export default function CityCard(props) {
  let { name, photo, population, continent, id} = props;
  return (
    <div className="cardCity" id={id}>
      <img className="cityImage" src={photo} alt={name}></img>
      <h4>{name}</h4>
      <h4>Population of {population}</h4>
      <h4>Continent: {continent}</h4>
      <LinkRoute to={`/CityDetails?id=${id}`} >
        <button >Details</button>
      </LinkRoute>
    </div>
  );
}
