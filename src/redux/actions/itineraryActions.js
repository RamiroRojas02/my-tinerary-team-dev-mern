import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

  const getMyItineraries = createAsyncThunk('myItineraries', async(id)=>{
    try {
      let res = await axios.get(`${BASE_URL}/itineraries/?userId=${id}`)
      console.log(res);
      return {
        itinerary : res.data.response
      }
    } catch (error) {
  
    }
  })
  const deleteItinerary = createAsyncThunk("itinerariesEliminate", async(id)=>{
    let res = await axios.delete(`${BASE_URL}/itineraries/${id}`)
    return {
      eliminate : res.data
    }
  
  })
  const editItinerary = createAsyncThunk("ItineraryEdit",async(itineraryToChange)=>{
    let {id, itinerary} = itineraryToChange
    try {
      let res= await axios.put(`${BASE_URL}/itineraries/${id}`,itinerary)
      console.log(res)
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
    deleteItinerary,
    editItinerary,
    getMyItineraries,
};
export default itineraryActions