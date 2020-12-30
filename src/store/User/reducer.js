const initialState = {
    token: localStorage.getItem("token"),
    favorites: [ ],
    data: { },
    error: { },
    loading: true,
}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "ERROR_HANDLE":
            return {
                error: {
                    ...action.payload
                }
            }
        case "VALID_USER":
            return {
                ...state,
                data: {...state.data , ...action.payload},
            }
        case "NOT_FAVORITE":
            return {
                ...state,
                favorites: state.favorites.filter(fav => fav.id !== action.payload.id)
            }
        case "SET_FAVORITE":
            return {
                ...state,
                favorites: [...state.favorites, ...action.payload]
            }
        case "REMOVE_USER":
            localStorage.removeItem("token")
            return {
                ...initialState, token: null
            }
        case "SET_NEW_USER":
            localStorage.setItem("token")
        return {
            ...state,
            data: action.payload
        }
        case "SET_USER":
            if(!localStorage.getItem("token")){
                localStorage.setItem("token", action.payload.token)
                return {
                    ...state,
                    token: action.payload.token,
                    data: {...state.data, ...action.payload},
                    loading: false,
                }
    
            } else {
                return {
                    ...state,
                    data: {...state.data, ...action.payload}
                }
    
            }
            default:
                return state
    }
}