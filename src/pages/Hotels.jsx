import React,{useEffect, useRef} from 'react'
import CardHoteles from '../components/CardHoteles'
import datosHoteles from '../api/data-hoteles'
import FilterHotels from "../components/FilterHotels"
export default function Hotels() { 
/* 
let datos = JSON.parse(localStorage.getItem("select"))
console.table(JSON.parse(localStorage.getItem("select")))
let variable = useRef() 
/* let references = useRef() 
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
  console.log(arr)
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
  */
 
 
/*   console.log(references.current.value) */
    let stateToChange="showDescription"
  return (<>
  <FilterHotels /* searchRef={references} */ /* variable={variable} onChange={filtrado}  *//* search={ searchByInput(datosHoteles)} *//>
    <div className='cardsContainerHotels'>
      {datosHoteles.map((e)=> <CardHoteles id={e.id} styleDescription={stateToChange}  name={e.name} photo={e.photo[1]} description={e.description}/>)}
    </div>
  </>)
}
