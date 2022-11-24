import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getShows = createAsyncThunk("showssStore", async () => {
  let res = await axios.get(`${apiUrl}/shows`)
    
    return {
        listShows : res.data.response
    }
});


const getMyShows = createAsyncThunk('myHotels', async(id)=>{
  try {
    let res = await axios.get(`${apiUrl}/shows/?userId=${id}`)
    console.log(res.data.response);
    return {
        listShows : res.data.response
    }
  } catch (error) {
    
  }
})
const deleteShow = createAsyncThunk("hotelsEliminate", async(id)=>{
  let res = await axios.delete(`${apiUrl}/shows/${id}`)
  return {
    eliminate : res.data
  }
  
})
const editShow = createAsyncThunk("HotelEdit",async(showToChange)=>{

  let {id, show} = showToChange
  try {
    let res= await axios.patch(`${apiUrl}/shows/${id}`,show)

    return {
      messagge : res.data.messagge,
      showUpdate : res.data.showUpdate,
      success: res.data.success
    }
  } catch (error) {
    return error
  }
  
} )

const hotelActions = {
  getShows,
  deleteShow,
  editShow,
  getMyShows,
};

export default hotelActions;