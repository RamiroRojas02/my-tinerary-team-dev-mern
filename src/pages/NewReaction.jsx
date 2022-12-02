import React, { useEffect,useRef } from "react";
import axios from "axios";
import { BASE_URL } from "../api/url";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import itineraryActions from "../redux/actions/itineraryActions";
import { useNavigate } from "react-router-dom";


export default function NewReaction() {
let navigate = useNavigate()
let formNewReaction = useRef(null);
 let itineraryReducer = useSelector(store=>store.itineraryReducer)
 const dispatch = useDispatch()
 useEffect(() => {
    dispatch(itineraryActions.getItineraries())
  }, []);


 let ItinerariesToMap = itineraryReducer.itinerary


 let submitReaction = (e) => {
        let inputs = formNewReaction.current;
        e.preventDefault();
       
        let arraysInputs = [...inputs];
        let valueInputs = arraysInputs.map((e) => e.value);
    
     /*    if (valueInputs.includes("")) {
          return alert("Data Missing");
        }
     */
        let reaction = {
          itineraryId:valueInputs[0],
          name: valueInputs[1],
          icon: valueInputs[2],
          iconBack: valueInputs[3],
          userId:[],
        };
  /*    let token = JSON.parse(localStorage.getItem('token'))
    
        let header = { headers : { 'Authorization': `Bearer ${token}` }}
        header seria la configuracion de axios , se puede mandar postman token /autorization
        autorization es un metodo q contiene bearer ,
     */
        axios.post(`${BASE_URL}/reactions/`,reaction/* ,header */)
          .then(res => {
            console.log(res)
            if (res.data.success) {
              Swal.fire({
                icon: 'success',
                title: 'Reaction created successfully',
                confirmButtonText: 'Continue',
                  didClose: ()=>{
                  navigate('/MyItineraries/')  
              } 
              })
            }
          })
          .catch(error =>{
            Swal.fire({
              icon: 'error',
              title:"You have an error",
              text : (error.response.data.message).split(","),
              confirmButtonText: 'Try Again',
            })
          }) 
          
      };
    



  return (
    <div className='myPage'>
      <div className="divNotFound">
        <form className="formRegister" ref={formNewReaction}>
        <h2>Create a new reaction</h2>
        <div className="inputDivForm">
          
          <div>
          Itinerary ID:
          <select className="selectForm">{ItinerariesToMap.map(e => (<option key={e._id} value={e._id}>{e.name}</option>))}</select>
        </div>
          <div>
            Name:
            <input type="text"></input>
          </div>
          <div>
            Icon-url:
            <input type="url"></input>
          </div>
          <div>
            IconBack-url:
            <input type="url"></input>
          </div>
          </div>
          <div className="submitButtomForm2">
        <button className="submitRegister" onClick={submitReaction}>Done</button></div>
        </form>
      </div>
    </div>
  )
}