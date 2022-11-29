import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../url";

const getShows = createAsyncThunk("showssStore", async () => {
  let res = await axios.get(`${apiUrl}/shows`)
    
    return {
        listShows : res.data.response
    }
});


const getMyShows = createAsyncThunk('myShows', async(id)=>{
  try {

    let res = await axios.get(`${apiUrl}/shows/?userId=${id}`)

    return {
        listShows : res.data.response
    }
  } catch (error) {
    
  }
})
const deleteShow = createAsyncThunk("showsEliminate", async(data)=>{
  let {token, id} =data
  let header = { headers : { 'Authorization': `Bearer ${token}` }}
  
  let res = await axios.delete(`${apiUrl}/shows/${id}`,header)
  return {
    eliminate : res.data
  }
  
})
const editShow = createAsyncThunk("ShowEdit",async(showToChange)=>{

  let {id, show,token} = showToChange
  let header = { headers : { 'Authorization': `Bearer ${token}` }}


  try {
    let res= await axios.patch(`${apiUrl}/shows/${id}`,show,header)

    return {
      messagge : res.data.messagge,
      showUpdate : res.data.showUpdate,
      success: res.data.success
    }
  } catch (error) {
    return error
  }
  
} )

const showActions = {
  getShows,
  deleteShow,
  editShow,
  getMyShows,
};

export default showActions;
