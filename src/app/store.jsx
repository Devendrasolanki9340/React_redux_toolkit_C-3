

import { configureStore } from '@reduxjs/toolkit'
import counderReducer from "../features/counterSlice"
import cartReducer from "../features/CartSlice"


 export const store = configureStore({
  reducer: {
    counter: counderReducer,
    cart : cartReducer,
  },
})