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

const hotelActions = {
  getHotels,
  getHotelsFilt,
};

export default hotelActions;
