import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from './Product/ProductSlice'
import SignInReducer from "./SignIn/SignInSlice"


export const store = configureStore({
    reducer : {
        product : ProductReducer , 
        signin : SignInReducer , 
    }
})


