import { createAsyncThunk  } from "@reduxjs/toolkit";
import axios from 'axios'

import { BASE_URL } from '../../api/url'

const getReactionsByEachItinerary = createAsyncThunk('getReactionsByEachItinerary',async(data)=>{
    let {showId,itineraryId}= data
    
    try{


        if (showId) {
            
            let res = await axios.get(`${BASE_URL}/reactions/?&showId=${showId}`)
            console.log(res)
            return{
                reaction:res.data.reaction //esto seria el payload
               } 
        }
        if (itineraryId) {
            
            let res = await axios.get(`${BASE_URL}/reactions/?itineraryId=${itineraryId}`)
            
            return{
             reaction:res.data.reaction //esto seria el payload
            }    
        }
        

    }catch(error){

        return{
            payload:"Error"
        }
    }
})
const updateReactions = createAsyncThunk("updateReactions", async (values) => {

    let { name, showId,itineraryId, token, userId } = values;
    console.log(values);
    
    
    
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try{
        if (showId) {
            let data = {
                name,
                showId
            }
            let res = await axios.put(`${BASE_URL}/reactions/?name=${name}&showId=${showId}`, data, headers)
            console.log(res)
            return {
              reaction: res.data.response
            }
        }
        if (itineraryId) {
            let data = {
                name,
                itineraryId
            }
            let res = await axios.put(`${BASE_URL}/reactions/?name=${name}&itineraryId=${itineraryId}`, data, headers)
            return {
                reaction: res.data.response
              }
        }
    }catch(error){
        return{
            error: 'Error'
        }
    }
  });
  const reactionByItinerary = createAsyncThunk("reactionByItinerary", async (userId) => {
    try{
        let response = await axios.get(`${BASE_URL}/reactions/?userId=${userId}`)
        console.log(response)
        return response.data.reaction
        
    }catch(error){
        return{
            error: 'Error'
        }
    }
  });

const reactionActions={
    getReactionsByEachItinerary,
    updateReactions,
    reactionByItinerary
};
export default reactionActions