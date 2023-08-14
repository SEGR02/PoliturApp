import { createSlice } from "@reduxjs/toolkit";

export const paymentsListSlice = createSlice({
  name: "paymentsList",
  initialState: { data: [] },
  reducers: {
    setPaymentsList: (state, action) => {
      state.data.push(action.payload);
    },
    removePayment: (state, action) => {
      const indexToRemove = action.payload;
      state.data.splice(indexToRemove, 1);
    },
    removeAllPayments: (state) => {
      state.data = [];
    },
  },
});

export const { setPaymentsList, removePayment, removeAllPayments } =
  paymentsListSlice.actions;

export default paymentsListSlice.reducer;
