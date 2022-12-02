import React from "react";
import ComentSection from "./Coments";

export default function Tinerary(props) {
  let { photo, name, price, duration, description,id } = props;
  console.log(id);
  return (
    <div className="tinerary">
      <h3>{name}</h3>
      <div className="CollectionTinerary">
        {photo.map((e, indice) => (
          <img src={e} alt="Tinerary-img" key={indice}></img>
        ))}
      </div>
      <div className="description">
        <h4>Description</h4>
        <p>{description}</p>
        <h5>Price: {price} USD</h5>
        <h5>Duration: {duration} Hours</h5>
      </div>
      <ComentSection id={id}/>
    </div>
  );
}
