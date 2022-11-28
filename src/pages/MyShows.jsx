import React, { useEffect, useRef } from "react";
import Swal from "sweetalert2";

import { useDispatch, useSelector } from "react-redux";

import showActions from "../redux/actions/showsActions";
import MyShowCard from "../components/MyShowCard";
import hotelActions from "../redux/actions/hotelsActions";
import axios from "axios";
import apiUrl from "../url";
import { useNavigate } from "react-router-dom";

export default function MyHotels() {
  let addNewShow= useRef(null)
  let shows = useSelector((store) => store.showsReducer);

  let hotels = useSelector((store) => store.hotelsReducer);

  let userCurrent = useSelector(store=>store.userReducer)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  let addShow = (e) => {
    e.preventDefault()
    let inputs = addNewShow.current
    let valueInputs = [...inputs].map((e) => e.value);

    let show = {
      hotelId:valueInputs[0],
      name: valueInputs[1],
      description: valueInputs[2],
      photo: valueInputs[3],
      price: valueInputs[4],
      date: valueInputs[5],
      userId: userCurrent.user.id ,
    };
    console.log(show.hotelId);
    axios.post(`${apiUrl}/shows/`, show)
    .then(res =>{
      // console.log(res.response)
      if (res.data.success) {
          Swal.fire({
          icon: 'success',
          title: 'Show created successfully',
          confirmButtonText: 'Continue',
            didClose: ()=>{
              navigate('/HotelDetails/'+ show.hotelId)  
        } 
        })
      }}) 
      .catch(error=>{
        Swal.fire({
          icon: 'error',
          title:"You have an error",
          text : (error.response.data.message).split(","),
          confirmButtonText: 'Try Again',
        })
      })  
      
      
    
  };
  
  useEffect(() => {
    dispatch(hotelActions.getHotels());
    dispatch(showActions.getMyShows(userCurrent.user.id));
  }, []);

  let myShows = shows.listShows;

  return (
    <div className="myPage">
      <form className="formRegister" ref={addNewShow}>
        <h2>Create your own Shows!</h2>
        <div className="inputDivForm">
          <div>
            Hotel:
            <select className="selectForm">
              {hotels.listHotels.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
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
            Price:
            <input type="number"></input>
          </div>
          <div>
            Date:
            <input type="date"></input>
          </div>
        </div>
        <div className="submitButtomForm2">
          <button className="submitRegister" onClick={addShow}>
            Done
          </button>
        </div>
      </form>
      <h1>My Shows</h1>
      <div className="myContainer">
        {myShows.length === 0 ? (
          <h2>You don't have Shows</h2>
        ) : (
          myShows.map((e) => (
            <MyShowCard key={e._id} id={e._id} name={e.name} img={e.photo} />
          ))
        )}
      </div>
    </div>
  );
}
