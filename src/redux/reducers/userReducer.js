import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";


const {signIn,signInToken}= userActions


const initialState ={
    user:{},
    token: "",
    message:""
}

const userReducer= createReducer(initialState,(builder) =>{
    builder.addCase(signIn.fulfilled,(state,action)=>{
        let {success, response,message} = action.payload
        if(success){
            let {user,token}= response

            localStorage.setItem('token', JSON.stringify(token))

            return{
                ...state,
                user: user,
                token: token,
                success:true,
                message:message
            }


        }else{
            console.log(response);
            return{
                ...state,
                success:false,
                message: response.message
            }
        }

})
    builder.addCase(signInToken.fulfilled,(state,action)=>{
        let {response,success,token} = action.payload
        console.log(response);

        if (success) {
            return{
                ...state,
                user: response.user,
                token: token,
                success:success
            }
        }else{
            return {
                message: response
            }
        }
    })
}
)

export default userReducer