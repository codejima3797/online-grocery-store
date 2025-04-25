import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import userReducer from './features/userSlice';
import checkoutReducer from './features/checkoutSlice';
import popularReducer from './features/popularSlice';
import newReducer from './features/newSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    checkout: checkoutReducer,
    popular: popularReducer,
    new: newReducer,
  },
}); 