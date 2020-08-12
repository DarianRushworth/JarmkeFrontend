import { combineReducers } from "redux"
import ownerReducer from "./Owner/reducer"

const owner = ownerReducer

export default combineReducers({
  owner,
  });