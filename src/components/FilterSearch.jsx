import React from 'react'
import { useState } from 'react'
import {BASE_URL} from '../api/u'
export default function FilterSearch() {
let {search,continent,filtCity}=props
continent = [...new Set(continent)].sort();
    return (
        <div className='filtersCity'>
        <div className="CheckBoxCity">
          {checkBoxSet.map((check, i) => (
            <CheckBox onChange={filtCity} value={continent} check={check} key={i} />
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
