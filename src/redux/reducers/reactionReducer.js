import {createReducer} from '@reduxjs/toolkit'
import reactionActions from '../actions/reactionActions'

const {getReactionsByEachItinerary,updateReactions}= reactionActions
const initialState = {
    reactionsByItinerary:[],
};
const reactionReducer = createReducer(initialState, (reaction)=>{
    reaction
    .addCase(getReactionsByEachItinerary.fulfilled,(state,action)=>{//state:estado original
        //action:

        return{
            ...state,//le agrego el valor siguiente 
            reactionsByItinerary:action.payload.reaction,//payload :caja que recibe modificaciones que le da las acciones
            //y el payload 
        }
    })
    .addCase(updateReactions.fulfilled, (state,action)=>{
        return{
            ...state,
            reactionUpdated:action.payload
        }
    })
})
export default reactionReducer