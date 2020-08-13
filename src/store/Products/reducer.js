const initialState = []

export default function productsReducer(state = initialState, action){
    switch(action.type){
        case "SET_PRODUCT_DETAILS":
            return [
                {...action.payload}
            ]
        case "SET_PRODUCTS":
            return [
                ...action.payload
            ]

            default:
                return state
    }
}