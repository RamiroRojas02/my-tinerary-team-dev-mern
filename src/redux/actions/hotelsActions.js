import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getHotels = createAsyncThunk("hotelsStore", async () => {
  let res = await axios.get(`${apiUrl}/hotels`)
    
    return {
      listHotels : res.data.response
    }
});

const getHotelsFilt = createAsyncThunk("hotelsFilt", async (values) => {
  let { search, select } = values;

  let res = await axios.get(`${apiUrl}/hotels/?order=${select}&name=${search}`)
    
  return {
    listHotelsFilt : res.data.response,
    selectValue: select,
    searchValue: search
  }
});
const getMyHotels = createAsyncThunk('myHotels', async(id)=>{
  try {
    let res = await axios.get(`${apiUrl}/hotels/?userId=${id}`)

    return {
      listHotels : res.data.response
    }
  } catch (error) {
    
  }
})
const deleteHotel = createAsyncThunk("hotelsEliminate", async(data)=>{
  let {id,token} =data
  let header = { headers : { 'Authorization': `Bearer ${token}` }}
  console.log(header.headers);
  try {
    let res = await axios.delete(`${apiUrl}/hotels/${id}`,header)
    return {
    eliminate : res.data
  }
  } catch (error) {
    
  }
  
  
  
})
const editHotel = createAsyncThunk("HotelEdit",async(hotelToChange)=>{

  let {id, hotel,token} = hotelToChange
  let header = { headers : { 'Authorization': `Bearer ${token}` }}


  try {
    let res= await axios.patch(`${apiUrl}/hotels/${id}`,hotel,header)

    return {
      messagge : res.data.messagge,
      hotelUpdate : res.data.hotelUpdate,
      success: res.data.success
    }
  } catch (error) {
    return error
  }
  
} )

const hotelActions = {
  getHotels,
  getHotelsFilt,
  deleteHotel,
  editHotel,
  getMyHotels,
};

export default hotelActions;
