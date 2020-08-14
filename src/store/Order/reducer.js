const initialState = {}

export default function orderReducer(state = initialState, action){
    switch(action.type){
        case "ADD_ORDER_PRODUCT":
            return {
                ...action.payload
            }
        case "SET_ORDER_PRODUCTS":
            return {
                ...state,
                ...action.payload
            }

            default:
                return state
    }
}