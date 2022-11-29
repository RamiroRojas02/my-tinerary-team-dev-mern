import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cityActions from "../redux/actions/cityActions";
import MyCityCard from "../components/MyCityCard";


export default function MyCities() {
  let cityy = useSelector(store => store.city)
// console.log(cityy)

  let userData = useSelector(store=>store.userReducer)

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(cityActions.getMyCities(userData.user.id))
    }, []);
     let myCities= cityy.city 



  return (
    <div className='myPage'>
        <h1>My Cities</h1>
         <div className='myContainer'>{myCities.length === 0 ? <h2>You don't have Cities</h2>: myCities.map(e => <MyCityCard key={e._id} id={e._id} name={e.name} img={e.photo} />) }</div>
     </div>
  )
}