const initialState = {
    loading: true,
    client_secret: false,
    countries: [],
    cities: [],
}

export default function orderReducer(state = initialState, action){
    switch(action.type){
        case "SET_COUNTRIES":
            return {
                ...state,
                countries: [...action.payload.country],
                cities: [...action.payload.city],
            }
        case "SET_SECRET":
            return {
                ...state,
                client_secret: action.payload
            }
        case "ADD_ORDER_PRODUCT":
            return {
                ...action.payload,
                loading: false,
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