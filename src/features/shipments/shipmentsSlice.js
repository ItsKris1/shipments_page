import { createAsyncThunk, createSlice, rejectWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import shipments from "../../shipments.json";

export const shipmentsSlice = createSlice({
  name: "shipments",
  initialState: {
    orders: [],
    status: "idle",
    error: null,
    viewingShipment: {
      data: null,
      index: 0,
    },
  },
  reducers: {
    shipmentViewed(state, action) {
      state.viewingShipment = action.payload;
    },

    shipmentChanged(state, action) {
      state.orders[state.viewingShipment.index] = action.payload;
    },

    shipmentDeleted(state, action) {
      state.orders.splice(action.payload.index, 1);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShipments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.error;
        state.orders = shipments;
      });
  },
});

export const fetchShipments = createAsyncThunk("shipments/fetchShipments", async (_, { rejectWithValue }) => {
  const apiURL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
  try {
    const response = await axios.get(apiURL);
    const data = await response.json();
    return data;
  } catch (e) {
    return rejectWithValue(e.response.data);
  }
});

export const { shipmentViewed, shipmentChanged, shipmentDeleted } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;
