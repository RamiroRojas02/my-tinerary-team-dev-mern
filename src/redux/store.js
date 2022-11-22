import { createAsyncThunk } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";


export const store = configureStore ({
        reducer: rootReducer 
})