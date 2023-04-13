import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './../Reducer/auth'

export default configureStore({
    reducer: {
        authorization: AuthReducer,
    }, 
    devTools: process.env.NODE_ENV !== 'production'
})