const initialState = {
    favorites: [ ],
    data: { },
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "SET_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, ...action.payload]
            }
        case "SET_NEW_USER":
        return {
            ...state,
            data: action.payload
        }
        case "SET_USER":
            return {
                ...state,
                data: action.payload
            }

            default:
                return state
    }
}