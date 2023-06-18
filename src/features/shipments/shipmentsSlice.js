import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShipments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = state.orders.concat(action.payload);
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.orders = state.orders.concat(shipments);
      });
  },
});

export const fetchShipments = createAsyncThunk("shipments/fetchShipments", async () => {
  const apiURL = "https://my.api.mockaroo.com/shipments.json?key=5e0b62d0";
  const response = await axios.get(apiURL);
  const data = await response.json();
  return data;
});

export const selectAllOrders = (state) => state.shipments.orders;

export const { shipmentViewed } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;

// function changeOrder(order) {
//   setData(
//     data.map((currOrder, orderIndex) => {
//       if (orderIndex === viewingOrderIndex) {
//         return order;
//       } else {
//         return currOrder;
//       }
//     })
//   );

//   setShowModal(false);
// }
