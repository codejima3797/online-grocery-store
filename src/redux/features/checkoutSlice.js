import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 1,
  shippingAddress: null,
  paymentMethod: null,
  orderSummary: null,
};

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    setOrderSummary: (state, action) => {
      state.orderSummary = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
    resetCheckout: (state) => {
      state.step = 1;
      state.shippingAddress = null;
      state.paymentMethod = null;
      state.orderSummary = null;
    },
  },
});

export const {
  setShippingAddress,
  setPaymentMethod,
  setOrderSummary,
  nextStep,
  prevStep,
  resetCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer; 