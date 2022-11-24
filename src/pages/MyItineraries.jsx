import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import MyItineraryCard from "../components/MyItineraryCard";


export default function MyItineraries() {
  let itineraryStore = useSelector(store => store.itineraryReducer)
console.log(itineraryStore)


    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(itineraryActions.getMyItineraries("636d5aca61aa2e5d1c58c909"))
    }, []);
     let MyItineraries= itineraryStore.itinerary
     console.log(MyItineraries)



  return (
    <div className='myPage'>
        <h1>My Itineraries</h1>
         <div className='myContainer'>{MyItineraries.length === 0 ? <h2>You don't have Itineraries</h2>: MyItineraries.map(e => <MyItineraryCard key={e._id} id={e._id} name={e.name} img={e.photo} />) }</div>
     </div>
  )
}