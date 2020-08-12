import { combineReducers } from "redux"
import ownerReducer from "./Owner/reducer"
import productReducer from "./Products/reducer"

const owner = ownerReducer
const products = productReducer

export default combineReducers({
  owner,
  products,
  });