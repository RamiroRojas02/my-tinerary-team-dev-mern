import { useRef } from "react";
import dataCity from "../api/data-city";

import CheckBox from "./CheckBox";

export default function Checks() {
  let ref = useRef(null);
  let search = useRef(null);

  let arraysInputs;
  let checked = [];
  let searchValue;

  function filtCity() {
    let filtByCheck = checkFilter(dataCity)
    let searchElement = search.current
    let filter = searchFilt(searchElement,filtByCheck)

  }

function checkFilter(arrayfilt) {
    arraysInputs = [...ref.current];
    checked = arraysInputs.filter((e) => e.checked);
    
    
    let cityFilterCheck = arrayfilt
    let array = [];
    if (searchValue === " ") {
      cityFilterCheck = dataCity
    }
    checked.map(
      (e) =>
        (array = array.concat(
          cityFilterCheck.filter(
            (city) =>
              city.continent.toLocaleLowerCase().split(" ").join("-") === e.id
          )
        ))
    );

    if (array.length === 0) {
      array = cityFilterCheck;
    } else {
      cityFilterCheck = array;
    }
    

    localStorage.setItem("Filt", JSON.stringify(array));
    return cityFilterCheck
  };

  function searchFilt(input,array) {
    
    searchValue = input.value
    let filterSearch = array
      
    if (checked.length === 0) {
      filterSearch = dataCity;
    }
    filterSearch = filterSearch.filter((e) =>
      e.name.toLocaleLowerCase().includes(searchValue)
    );
    
    localStorage.setItem("Filt", JSON.stringify(filterSearch));
    return filterSearch
  };

  let checkboxes = dataCity.map((city) => city.continent);
  let checkBoxSet = [...new Set(checkboxes)].sort();

  return (
    <div className="filtersCity">
      <form ref={ref}>
        <div className="CheckBoxCity">
          {checkBoxSet.map((check, i) => (
            <CheckBox change={filtCity} check={check} key={i} />
          ))}
        </div>
      </form>
      <input
        id="searchCity"
        ref={search}
        onChange={filtCity}
        className="search"
        type="text"
        placeholder="search"
      ></input>
    </div>
  );
}
