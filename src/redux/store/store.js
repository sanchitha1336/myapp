import { configureStore } from '@reduxjs/toolkit'
import { productReducer } from '../reducer/productReducer';

const store = configureStore({
    reducer: {
      // Define a top-level state field named `todos`, handled by `todosReducer`
      getproduct: productReducer,
    }
  })
export default store;
