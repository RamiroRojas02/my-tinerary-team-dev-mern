import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";


const {signIn,signInToken,getMyProfile,updateMyProfile ,signOut}= userActions


const initialState ={
    user:{},
    token: "",
    message:"",
    myUser:{},
    logged:false
}

const userReducer= createReducer(initialState,(builder) =>{
    builder.addCase(signIn.fulfilled,(state,action)=>{
        let {success,response,message} = action.payload
        if(success){
            let {user,token}= response

            console.log(user);
            localStorage.setItem('token', JSON.stringify(token))

            return{
                ...state,
                user: user,
                token: token,
                success:true,
                message:message,
                logged:true
            }
        }else{

            return{
                ...state,
                success:false,
                message: response.message
            }
        }

})
    builder.addCase(signInToken.fulfilled,(state,action)=>{
        let {response,success,token} = action.payload


        if (success) {
            return{
                ...state,
                user: response.user,
                token: token,
                success:success,
                logged:true
            }
        }else{
            return {
                message: response
            }
        }
    })
    builder.addCase(getMyProfile.fulfilled,(state,action)=>{
        console.log(action);
        let {success,myUser,response} = action.payload
        if (success) {
            return{
                ...state,
                myUser: myUser,
                success: success
            }
        }else{
            return {
                ...state,
                message:response
            }
        }
    })
    builder.addCase(updateMyProfile.fulfilled,(state,action)=>{
        let {myUser,success} = action.payload

        if (success) {
            return {
                ...state,
                myUser,
                success
            }
        }
    })
    builder.addCase(signOut.fulfilled, (state,action)=>{
        const {success,response}= action.payload
        if(success){
            localStorage.removeItem('token')
            let newState={
                ...state,
                user:{},
                logged:false,
                token:''
            }
            return newState
        }else{
            let newState={
                ...state,
                message:response
            }
            return newState
        }
    })
}
)

export default userReducer