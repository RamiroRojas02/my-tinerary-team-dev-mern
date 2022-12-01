import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getReactionsByEachItinerary = createAsyncThunk('getReactionsByEachItinerary',async(idItinerary)=>{
    try{
        const response = await axios.get(`${BASE_URL}/reactions/?itineraryId=${idItinerary}`)
        return{
         reaction :response.data.reaction//esto seria el payload
        }    

    }catch(error){

        return{
            payload:"Error"
        }
    }
})
const updateReactions = createAsyncThunk("updateReactions", async (values) => {
    let { name, idItinerary } = values;
    debugger
    let res = await axios.get(`${BASE_URL}/reactions/?name=${name}&itineraryId=${idItinerary}`)
      
    return {
      reactionUpdated : res.data.response,
    }
  });


const reactionActions={
    getReactionsByEachItinerary,
    updateReactions
};
export default reactionActions