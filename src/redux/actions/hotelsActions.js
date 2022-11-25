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
    console.log(res.data.response);
    return {
      listHotels : res.data.response
    }
  } catch (error) {
    
  }
})
const deleteHotel = createAsyncThunk("hotelsEliminate", async(id)=>{
  let res = await axios.delete(`${apiUrl}/hotels/${id}`)
  return {
    eliminate : res.data
  }
  
})
const editHotel = createAsyncThunk("HotelEdit",async(hotelToChange)=>{

  let {id, hotel} = hotelToChange
  console.log(hotelToChange);
  try {
    let res= await axios.patch(`${apiUrl}/hotels/${id}`,hotel)

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
