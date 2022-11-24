import React from 'react'
import CheckBox from './CheckBox';

export default function FilterSearch(props) {

let {search,onChange}=props
return (
        <div className='filtersCity'>
        <div className="CheckBoxCity">
          
            <CheckBox onChange={onChange} value="Asia"/>
            <CheckBox onChange={onChange} value="Europe" />
            <CheckBox onChange={onChange} value="South America" />
            <CheckBox onChange={onChange} value="North America" />  
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
