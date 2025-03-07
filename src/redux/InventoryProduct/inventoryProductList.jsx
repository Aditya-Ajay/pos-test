import { createAsyncThunk  , createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrder = createAsyncThunk(
    "inventory/get" , async(_ , {rejectWithValue})=>{
        try{
            const inventory = await axios.get('localhost:3000' , {
                headers : {
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            }) 
            return inventory.data

        }catch(err){
            return rejectWithValue(err.inventory.data || 'THERE WAS AN ERROR FETCHING THE LISTING THE INVENTORY')
        }
    }
)

const inventorySlice =  createSlice({
    name : 'inventory' , 
    

})