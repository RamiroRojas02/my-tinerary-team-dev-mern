import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelsActions";

const {getHotels, getHotelsFilt} = hotelActions

const initialState = {
    listHotels : [],
    listHotelsFilt: [],
    loading: false,
    select: "",
    search:"",
}
const hotelsReducer = createReducer(initialState, (builder) =>{
    builder.addCase(getHotels.fulfilled, (state, action) =>{

        return {
            ...state, 
            loading:false,
            listHotels : action.payload.listHotels
        }
    }) 
    builder.addCase(getHotels.pending, (state, action) =>{

        return {
            ...state, 
            loading:true
        }
    })

    builder.addCase(getHotelsFilt.fulfilled, (state,action) =>{
        return{
            ...state,
            loading:false,
            listHotelsFilt: action.payload.listHotelsFilt,
            select: action.payload.selectValue,
            search: action.payload.searchValue
        }
    })

})


export default hotelsReducer