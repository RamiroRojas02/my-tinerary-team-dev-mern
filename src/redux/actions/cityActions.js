import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { BASE_URL } from '../../api/url'

const getCity = createAsyncThunk('getCity',async()=>{
    try{
        const response = await axios.get(`${BASE_URL}/api/cities`)
        return response.data.response

    }catch(error){
        console.log(error)
        return{
            payload:"Error"
        }
    }
})

const getCityFilter = createAsyncThunk(
    "getCitiesFilter",
    async ({ continent, value }) => {
      let url = `${BASE_URL}/api/cities?${continent}&name=${value}`;
  
      try {
        const res = await axios.get(url);
        console.log(res.data.response);
        return {
          city: res.data.response,
          continent,
          value,
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