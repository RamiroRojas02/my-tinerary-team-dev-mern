import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const getCity = createAsyncThunk('getCity',async()=>{
    try{
        const response = await axios.get(`${BASE_URL}/api/cities`)
        return response.data.response//esto seria el payload

    }catch(error){
        console.log(error)
        return{
            payload:"Error"
        }
    }
})
/*  */
const getCityFilter = createAsyncThunk("getCitiesFilter",async ({value,continente}) => {
    let url = `${BASE_URL}/api/cities/?${continente}${value}`;
      try {
        const res = await axios.get(url);
        console.log(url);
        return {
          city: res.data.response,
        };
      } catch (error) {
        console.log(error);
        return {
          payload: "Error",
        };
      }
    }
  );
  const getMyCities = createAsyncThunk('myCities', async(id)=>{
    try {
      let res = await axios.get(`${BASE_URL}/api/cities/?userId=${id}`)
      console.log(res.data.response);
      return {
        city : res.data.response
      }
    } catch (error) {
  
    }
  })
  const deleteCity = createAsyncThunk("citiesEliminate", async(id)=>{
    let res = await axios.delete(`${BASE_URL}/api/cities/${id}`)
    return {
      eliminate : res.data
    }
  
  })
  const editCity = createAsyncThunk("CityEdit",async(cityToChange)=>{
    let {id, city} = cityToChange
    try {
      let res= await axios.put(`${BASE_URL}/api/cities/${id}`,city)
      console.log(res)
      return {
        messagge : res.data.message,
        cityUpdate : res.data.citySync,
        success: res.data.success
      }
    } catch (error) {
      return error
    }
  
  } )

const cityActions={
    getCity,
    getCityFilter,
    deleteCity,
    editCity,
    getMyCities,
};
export default cityActions