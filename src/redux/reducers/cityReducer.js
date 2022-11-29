import {createReducer} from '@reduxjs/toolkit'
import cityActions from '../actions/cityActions'

const {getCity,getCityFilter,editCity,deleteCity,getMyCities}= cityActions
const initialState = {
    city:[],
    errors: []
};

const cityReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getCity.fulfilled,(state,action)=>{//state:estado original
        //action:

        return{
            ...state,//le agrego el valor siguiente 
            city:action.payload,//payload :caja que recibe modificaciones que le da las acciones
            //y el payload 
        }
    })
    .addCase(getCityFilter.fulfilled, (state, action) => {

        return {
          ...state,
          ...action.payload,
        }
    })
    .addCase(deleteCity.fulfilled, (state,action) =>{

        let cities = state.city.filter( e => e._id !== action.payload.eliminate.id)

        return{
            ...state,
            city: cities,

        }
    })
    .addCase(editCity.fulfilled, (state,action) =>{

        if (action.payload.success) {
            let cities = state.city.filter( e => e._id !== action.payload.cityUpdate._id)

            cities.push(action.payload.cityUpdate)

            return{
            ...state,
            city: cities,

            } 
        }else{
            return{
                ...state,
                errors: action.payload.messagge
            }
        }
        
    }) 
    .addCase(getMyCities.fulfilled, (state,action) =>{

        return{
            ...state,
            city: action.payload.city,
            

        }
    })
})
export default cityReducer

//creo un estado inicial, desestructuro la accion y creo un caso (que seria un evento)