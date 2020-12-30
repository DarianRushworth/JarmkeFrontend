const initialState = {
    allJewellery: [ ],
    specificPiece: { },
    error: { },
    loading: true,
}

export default function productsReducer(state = initialState, action){
    switch(action.type){
        case "ERROR_HANDLE":
            return {
                error: {
                    ...action.payload
                }
            }
        case "SET_PRODUCT_DETAILS":
            return {
                ...state,
                specificPiece: action.payload,
                loading: false,
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                allJewellery: [...state.allJewellery ,...action.payload],
            }

            default:
                return state
    }
}