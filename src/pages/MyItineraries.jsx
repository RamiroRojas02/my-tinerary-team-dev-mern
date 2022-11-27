import React, { useEffect,useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import cityActions from "../redux/actions/cityActions";
import MyItineraryCard from "../components/MyItineraryCard";
import { useNavigate } from "react-router-dom";

export default function MyItineraries() {
  let formNewItinerary = useRef(null);
  let {city} = useSelector(store=> store.city)
  let navigate = useNavigate()
  let itineraryStore = useSelector(store => store.itineraryReducer)
  console.log(itineraryStore)
 

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(cityActions.getCity())
    dispatch(itineraryActions.getItineraries())
    dispatch(itineraryActions.getMyItineraries("636d5aca61aa2e5d1c58c909"))
  }, []);
  let MyItineraries = itineraryStore.itinerary
  console.log(MyItineraries)
  let MyItinerariesNR = city
  console.log(city)
  let submitItinerary = (e) => {
    let inputs = formNewItinerary.current;
    e.preventDefault();

    let arraysInputs = [...inputs];
    let valueInputs = arraysInputs.map((e) => e.value);
    console.log(valueInputs);
 /*    if (valueInputs.includes("")) {
      return alert("Data Missing");
    }
 */
    let itinerary = {
      cityId:valueInputs[0],
      name: valueInputs[1],
      description: valueInputs[2],
      photo: [valueInputs[3]],
      duration: valueInputs[4],
      price: valueInputs[5],
      userId: valueInputs[6],
    };
    console.log(itinerary)
    axios.post(`${BASE_URL}/api/itineraries/`,itinerary)
      .then(res => {
        console.log(res);
        if (res.data.success) {
          Swal.fire({
            icon: 'success',
            title: 'Itinerary created successfully',
            confirmButtonText: 'Continue',
              didClose: ()=>{
              navigate('/MyItineraries') 
           } 
          })
        }
      })
      .catch(error =>{
        Swal.fire({
          icon: 'error',
          title: (error.response.data.message).split(","),
          confirmButtonText: 'Try Again',
        })
      }) 
      
  };


  return (
    <div className='myPage'>
      <h1>My Itineraries</h1>
      <div className='myContainer'>{MyItineraries.length === 0 ? <h2>You don't have Itineraries</h2> : MyItineraries.map(e => <MyItineraryCard key={e._id} id={e._id} name={e.name} img={e.photo} />)}</div>
      <div className="divNotFound">
        <form className="formRegister" ref={formNewItinerary}>
        <div className="inputDivForm">
          <div>
          City of Itinerary:
          <select className="selectForm">{MyItinerariesNR.map(e => (<option key={e._id} value={e._id}>{e.name}</option>))}</select>
        </div>
          <div>
            Name:
            <input type="text"></input>
          </div>
          <div>
            Description:
            <input type="text"></input>
          </div>
          <div>
            Photo:
            <input type="url"></input>
          </div>
          <div>
            Duration:
            <input type="number"></input>
          </div>
          <div>
            price:
            <input type="number"></input>
          </div>
          <div>
            userId:
            <input type="text"></input>
          </div>
          </div>
          <div className="submitButtomForm2">
        <button className="submitRegister" onClick={submitItinerary}>Done</button></div>
        </form>
      </div>
    </div>
  )
}