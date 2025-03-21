import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from './Product/ProductSlice'
import SignInReducer from "./SignIn/SignInSlice"
import CustomerReducer from "./Customer/CustomerSlice"
import OrderReducer from "./Order/OrderSlice"
import AnalyticsReducer from './Analytics/AnalyticsSlice'
import LayawaysReducer from './Layaways/LayawaysSlice'

export const store = configureStore({
    reducer : {
        product : ProductReducer , 
        signin : SignInReducer , 
        customer : CustomerReducer , 
        order : OrderReducer,
        analytics : AnalyticsReducer,
        layaways : LayawaysReducer
    }
})


