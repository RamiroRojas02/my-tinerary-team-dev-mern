import { createReducer } from "@reduxjs/toolkit";
import hotelActions from "../actions/hotelsActions";

const {getHotels, getHotelsFilt, deleteHotel,editHotel,getMyHotels} = hotelActions

const initialState = {
    listHotels : [],
    listHotelsFilt: [],

    loading: false,
    select: "",
    search:"",
    errors: [],
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
    builder.addCase(deleteHotel.fulfilled, (state,action) =>{

        let hotels = state.listHotels.filter( e => e._id !== action.payload.eliminate.id)

        return{
            ...state,
            loading:false,
            listHotels: hotels,

        }
    })
    builder.addCase(editHotel.fulfilled, (state,action) =>{

        if (action.payload.success) {
            let hotels = state.listHotels.filter( e => e._id !== action.payload.hotelUpdate._id)

            hotels.push(action.payload.hotelUpdate)

            return{
            ...state,
            loading:false,
            listHotels: hotels,

            } 
        }else{
            return{
                ...state,
                loading:false,
                errors: action.payload.messagge
            }
        }
        
    })
    builder.addCase(getMyHotels.fulfilled, (state,action) =>{
        return{
            ...state,
            loading:false,
            listHotels: action.payload.listHotels,

        }
    })

})


export default hotelsReducer