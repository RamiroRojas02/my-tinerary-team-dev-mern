import React from 'react'
import CheckBox from './CheckBox';

export default function FilterSearch(props) {

let {search,continent,onChange}=props
continent = [...new Set(continent)].sort();

return (
        <div className='filtersCity'>
        <div className="CheckBoxCity">
          {continent.map((check, i) => (
            <CheckBox onChange={onChange} value={continent} check={check} key={i} />
          ))} 
        </div>
            <input
                id="searchCity"
                onChange={search}
                className="search"
                type="text"
                placeholder="search"
            ></input>
        </div>
    )
}
