const initialState = {}

export default function orderReducer(state = initialState, action){
    switch(action.type){
        case "SET_ORDER_PRODUCTS":
            return {
                ...state,
                ...action.payload
            }

            default:
                return state
    }
}