import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import MyCityCard from "../components/MyCityCard";


export default function MyCities() {
  let cityy = useSelector(store => store.city)
console.log(cityy)


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(cityActions.getMyCities("6372494878cf1c151a1a4f67"))
    }, []);
     let myCities= cityy.city 



  return (
    <div className='myPage'>
        <h1>My Cities</h1>
         <div className='myContainer'>{myCities.length === 0 ? <h2>You don't have Hotels</h2>: myCities.map(e => <MyCityCard key={e._id} id={e._id} name={e.name} img={e.photo} />) }</div>
     </div>
  )
}