import React, { useEffect, useRef, useState } from 'react'
import datosHoteles from '../api/data-hoteles'
export default function FilterHotels(props) {

let {select, searchInput,onChange} = props



  // let zToa = [...datosHoteles].sort((a,b)=>{
  //   const nombre1 = a.name.toLowerCase();
  //   const nombre2 = b.name.toLowerCase();
  //   if(nombre2<nombre1){
  //     return -1;
  //   }
  //   if(nombre2>nombre1){
  //     return 1;
  //   }
  //   return 0;
  // })
  // let aToz = [...datosHoteles].sort((a,b)=>{
  //   const nombre1 = a.name.toLowerCase();
  //   const nombre2 = b.name.toLowerCase();
  //   if(nombre1<nombre2){
  //     return -1;
  //   }
  //   if(nombre1>nombre2){
  //     return 1;
  //   }
  //   return 0;
  // })
//  const[search,setSearch]=useState(""); 
// console.log(search)

// let hotelsFilter= datosHoteles.filter((e)=>(e.name.toLowerCase().includes(search.toLowerCase()))) 
// console.log(hotelsFilter)


  return (
    <div className='filters'>
      <form> <div className="selectBar">
        <label> Alphabetical order:
        <select name="" ref={select} onChange={onChange}>
          <option value={""}>All</option>{/* {datosHoteles.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="asc">A to Z</option>{/* {aToz.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="desc">Z to A</option>{/* {zToa.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
        </select></label></div>
        <div className="searchBar">
        <label >    Search by text: <input type="text" ref={searchInput} onChange={onChange} /></label>
        </div>
      </form>
    </div>
  )
}
