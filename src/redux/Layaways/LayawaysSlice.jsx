import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchPendingLayaways = createAsyncThunk(
  "fetchPendingLayaways",
  async (limit = 4, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/layaway/pending`, {
        params: { limit },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue(`Error fetching pending layaways: ${err.message}`);
    }
  }
);

export const layawaySlice = createSlice({
  name: "layaway",
  initialState: {
    pendingLayaways: [],
    count: 0,
    error: false,
    pending: false,
    successful: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingLayaways.pending, (state) => {
        state.error = false;
        state.pending = true;
      })
      .addCase(fetchPendingLayaways.rejected, (state) => {
        state.error = true;
        state.pending = false;
      })
      .addCase(fetchPendingLayaways.fulfilled, (state, action) => {
        state.error = false;
        state.pending = false;
        state.successful = true;
        state.pendingLayaways = action.payload.data;
        state.count = action.payload.count;
      });
  },
});

export default layawaySlice.reducer;
