import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from './Product/ProductSlice'
import SignInReducer from "./SignIn/SignInSlice"
import CustomerReducer from "./Customer/CustomerSlice"
import OrderReducer from "./Order/OrderSlice"


export const store = configureStore({
    reducer : {
        product : ProductReducer , 
        signin : SignInReducer , 
        customer : CustomerReducer , 
        order : OrderReducer
    }
})


