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
            const all_jewellery = [...state.allJewellery, ...action.payload]
            console.log("ALL", all_jewellery)

            const new_payload = all_jewellery.filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i)
            console.log("PAYLOAD", new_payload)

            return {
                ...state,
                allJewellery: [...new_payload],
            }

            default:
                return state
    }
}