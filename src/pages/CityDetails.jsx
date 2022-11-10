import React, { useState } from "react";
import dataCity from "../api/data-city";
import dataCityActivities from "../api/data-city-activities";
import City from "../components/City";
import ComentSection from "../components/ComentSection";
import Tinerary from "../components/Tinerary";

export default function CityDetails() {
  let id = window.location.search.slice(4);

  let city = dataCity.filter((e) => e.id === id);
  let activities = dataCityActivities.filter((e) => e.citiId === id);

  let [comentState, setComentState] = useState("coment-collapse");
  let coments = () => {
    if (comentState === "coment-collapse") {
      setComentState("coment-expand");
    } else {
      setComentState("coment-collapse");
    }
  };

  return (
    <div className="cityDetails">
      <City
        name={city[0].name}
        continent={city[0].continent}
        photo={city[0].photo}
        population={city[0].population}
      />

      <ComentSection event={coments} state={comentState} />
      <h2>Tinerary</h2>
      <div className="cityTinerary">
        {activities.length ? (
          activities.map((e) => (
            <Tinerary
              description={e.description}
              price={e.price}
              duration={e.duration}
              photo={e.photo}
              name={e.name}
              key={e.id}
            />
          ))
        ) : (
          <h4>No Tinerary</h4>
        )}
      </div>
    </div>
  );
}
