import { combineReducers } from "redux"
import ownerReducer from "./Owner/reducer"
import productReducer from "./Products/reducer"
import userReducer from "./User/reducer"

const owner = ownerReducer
const products = productReducer
const user = userReducer

export default combineReducers({
  owner,
  products,
  user,
  });