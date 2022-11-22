import {createReducer} from '@reduxjs/toolkit'
import cityActions from '../actions/cityActions'

const {getCity,getCityFilter}= cityActions
const initialState = {
    city:[],
};

const cityReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getCity.fulfilled,(state,action)=>{
        console.log(action);
        return{
            ...state,//le agrego el valor siguiente 
            city:action.payload,
        }
    })
    .addCase(getCityFilter.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      });
})
export default cityReducer

//creo un estado inicial, desestructuro la accion y creo un caso (que seria un evento)