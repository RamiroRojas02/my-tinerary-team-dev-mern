import {createReducer} from '@reduxjs/toolkit'
import cityActions from '../actions/cityActions'

const {getCity,getCityFilter}= cityActions
const initialState = {
    city:[],
};

const cityReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getCity.fulfilled,(state,action)=>{//state:estado original
        //action:
        console.log(action);
        return{
            ...state,//le agrego el valor siguiente 
            city:action.payload,//payload :caja que recibe modificaciones que le da las acciones
            //y el payload 
        }
    })
    .addCase(getCityFilter.fulfilled, (state, action) => {
        console.log(action)
        return {
          ...state,
          city:action.payload.city,
        };
      });
})
export default cityReducer

//creo un estado inicial, desestructuro la accion y creo un caso (que seria un evento)