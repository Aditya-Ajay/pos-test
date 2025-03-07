import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; 

const BASE_URL = import.meta.env.VITE_BASE_URL;
export const handleSignIn = createAsyncThunk(
  "/api/post/signIn",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, credentials, {
        mode: "no-cors",
      });
      const data = response.data;
      
      const decodedToken = jwtDecode(data.access_token);
      if(decodedToken.role=="cashier"){
        window.location.href="/cashier-dashboard";
      }
      if(decodedToken.role =="admin"){
        window.location.href="/admin-dashboard"
      }
      
      console.log("Decoded Token:", decodedToken);

      localStorage.setItem("token", data.access_token);
      return data.access_token; 
    } catch (err) {
      console.log(credentials);
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

export const SignInSlice = createSlice({
  name: "signin",
  initialState: {
    token: null,
    error: null,
    pending: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleSignIn.pending, (state) => {
        state.error = null;
        state.pending = true;
      })
      .addCase(handleSignIn.rejected, (state, action) => {
        state.error = action.payload; // ✅ Store error message properly
        state.pending = false;
      })
      .addCase(handleSignIn.fulfilled, (state, action) => {
        console.log(action);
        state.token = action.payload;
        state.pending = false;
        state.error = null;
      });
  },
});

export default SignInSlice.reducer;
