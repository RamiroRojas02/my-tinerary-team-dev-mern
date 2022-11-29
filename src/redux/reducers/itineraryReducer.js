import {createReducer} from '@reduxjs/toolkit'
import itineraryActions from '../actions/itineraryActions'

const {editItinerary,deleteItinerary,getMyItineraries,getItineraries}= itineraryActions
const initialState = {
    itinerary:[],
    errors: []
};

const itineraryReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(deleteItinerary.fulfilled, (state,action) =>{

        let itineraries = state.itinerary.filter( e => e._id !== action.payload.eliminate.id)

        return{
            ...state,
            itinerary: itineraries,

        }
    })
    .addCase(editItinerary.fulfilled, (state,action) =>{

        if (action.payload.success) {
            let itineraries = state.itinerary.filter( e => e._id !== action.payload.itineraryUpdate._id)

            itineraries.push(action.payload.itineraryUpdate)

            return{
            ...state,
            itinerary: itineraries,

            } 
        }else{
            return{
                ...state,
                errors: action.payload.messagge
            }
        }
        
    }) 
    .addCase(getMyItineraries.fulfilled, (state,action) =>{

        return{
            ...state,
            itinerary: action.payload.itinerary,
            

        }
    })
    .addCase(getItineraries.fulfilled, (state, action) =>{

        return {
            ...state, 
            itinerary: action.payload.itinerary,
        }
    }) 
})
export default itineraryReducer
