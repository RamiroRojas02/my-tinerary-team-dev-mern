import React from "react";

export default function CityCard(props) {
  let { name, photo, population, continent, id } = props;

  return (
    <div className="cardCity" id={id}>
      <img className="cityImage" src={photo} alt={name}></img>
      <h4>{name}</h4>
      <h4>Population of {population}</h4>
      <h4>Continent: {continent}</h4>
      <button>Activity</button>
    </div>
  );
}
