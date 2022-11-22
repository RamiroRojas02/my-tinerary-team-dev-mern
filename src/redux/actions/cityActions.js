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
const cityActions={
    getCity,
    getCityFilter,
};
export default cityActions