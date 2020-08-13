const initialState = {
    allJewellery: [ ],
    specificPiece: { }
}

export default function productsReducer(state = initialState, action){
    switch(action.type){
        case "SET_PRODUCT_DETAILS":
            return {
                ...state,
                specificPiece: action.payload
            }
        case "SET_PRODUCTS":
            return {
                ...state,
                allJewellery: [...state.allJewellery ,...action.payload]
            }

            default:
                return state
    }
}