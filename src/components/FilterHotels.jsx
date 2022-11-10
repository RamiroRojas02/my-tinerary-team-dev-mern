import React, { useEffect, useRef, useState } from 'react'
import datosHoteles from '../api/data-hoteles'
export default function FilterHotels() {

let datos = JSON.parse(localStorage.getItem("filtHoteles"))

let variable = useRef() 
/* let references = useRef() */

  let filtrado =()=>{
  let arr = []
  arr = [...variable.current.value]
  if(arr[0]==="1"){
    localStorage.setItem("select",JSON.stringify(datosHoteles))
  }else if (arr[0]==="2"){
    localStorage.setItem("select",JSON.stringify(aToz))
  }else if (arr[0]==="3") {
    localStorage.setItem("select",JSON.stringify(zToa))
  }

}



  let zToa = [...datosHoteles].sort((a,b)=>{
    const nombre1 = a.name.toLowerCase();
    const nombre2 = b.name.toLowerCase();
    if(nombre2<nombre1){
      return -1;
    }
    if(nombre2>nombre1){
      return 1;
    }
    return 0;
  })
  let aToz = [...datosHoteles].sort((a,b)=>{
    const nombre1 = a.name.toLowerCase();
    const nombre2 = b.name.toLowerCase();
    if(nombre1<nombre2){
      return -1;
    }
    if(nombre1>nombre2){
      return 1;
    }
    return 0;
  })
 const[search,setSearch]=useState(""); 
console.log(search)
const handleChange = (event)=>{
  setSearch(event.target.value)
}
let hotelsFilter= datosHoteles.filter((e)=>(e.name.toLowerCase().includes(search.toLowerCase()))) 
console.log(hotelsFilter)


  return (
    <div className='filters'>
      <form> <div className="selectBar">
        <label> Alphabetical order:
        <select name="" ref={variable} onChange={filtrado}>
          <option value="1">All</option>{/* {datosHoteles.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="2">A to Z</option>{/* {aToz.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
          <option value="3">Z to A</option>{/* {zToa.map((e)=> <CardHoteles key={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)} */}
        </select></label></div>
        <div className="searchBar">
        <label >    Search by text: <input type="text" onChange={handleChange} /></label>
        </div>
      </form>
    </div>
  )
}
