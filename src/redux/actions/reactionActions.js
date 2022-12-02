import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getReactionsByEachItinerary = createAsyncThunk('getReactionsByEachItinerary',async(idItinerary)=>{
    try{
        const response = await axios.get(`${BASE_URL}/reactions?itineraryId=${idItinerary}`)

        console.log(response.data.reaction) // ME TRAE LAS REACCIONES

        return{
         reaction:response.data.reaction //esto seria el payload
        }    

    }catch(error){

        return{
            payload:"Error"
        }
    }
})
const updateReactions = createAsyncThunk("updateReactions", async (values) => {

    let { name, idItinerary, token } = values;
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        let res = await axios.put(`${BASE_URL}/reactions?name=${name}&itineraryId=${idItinerary}`, null, headers)
        console.log(res)
        return {
          reaction: res.data.response
        }
    }catch(error){
        return{
            error: 'Error'
        }
    }
  });


const reactionActions={
    getReactionsByEachItinerary,
    updateReactions
};
export default reactionActions