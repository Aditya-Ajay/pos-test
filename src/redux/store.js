import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from './Product/ProductSlice'
import SignInReducer from "./SignIn/SignInSlice"
import CustomerReducer from "./Customer/CustomerSlice"


export const store = configureStore({
    reducer : {
        product : ProductReducer , 
        signin : SignInReducer , 
        customer : CustomerReducer
    }
})


