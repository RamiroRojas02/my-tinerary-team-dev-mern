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
const cityActions={
    getCity,
    getCityFilter,
};
export default cityActions