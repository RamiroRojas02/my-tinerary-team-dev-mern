import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const getItineraries = createAsyncThunk("allItineraries", async () => {
  try{
  let res = await axios.get(`${BASE_URL}/itineraries/`)
    return {
      itinerary : res.data.response
    }}catch(err){

      return{
        payload:"Error"
    }
    }
});

  const getMyItineraries = createAsyncThunk('myItineraries', async(id)=>{
    try {

      let res = await axios.get(`${BASE_URL}/itineraries/?userId=${id}`)

      return {
        itinerary : res.data.response
      }
    } catch (error) {
  
    }
  })
  const deleteItinerary = createAsyncThunk("itinerariesEliminate", async(data)=>{
    let  {id, token} = data
    let header = { headers : { 'Authorization': `Bearer ${token}` }}

    let res = await axios.delete(`${BASE_URL}/itineraries/${id}`,header)
    return {
      eliminate : res.data
    }
  
  })
  const editItinerary = createAsyncThunk("ItineraryEdit",async(itineraryToChange)=>{
    let {id, itinerary,token} = itineraryToChange
    let header = { headers : { 'Authorization': `Bearer ${token}` }}

    try {
      let res= await axios.put(`${BASE_URL}/itineraries/${id}`,itinerary,header)

      return {
        messagge : res.data.message,
        itineraryUpdate : res.data.itinerarySync,
        success: res.data.success
      }
    } catch (error) {
      return error
    }
  
  } )

const itineraryActions={
    getItineraries,
    deleteItinerary,
    editItinerary,
    getMyItineraries,
};
export default itineraryActions