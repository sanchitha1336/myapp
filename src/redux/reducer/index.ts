import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
 const allReducer=combineReducers({
    allProduct:productReducer,
 });
 export default allReducer;