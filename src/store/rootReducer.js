import { combineReducers } from "redux"
import ownerReducer from "./Owner/reducer"
import productReducer from "./Products/reducer"
import userReducer from "./User/reducer"
import orderReducer from "./Order/reducer"

const owner = ownerReducer
const products = productReducer
const user = userReducer
const order = orderReducer

export default combineReducers({
  order,
  owner,
  products,
  user,
  });