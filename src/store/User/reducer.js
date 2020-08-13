const initialState = {}

export default function userReducer(state = initialState, action){
    switch(action.type){
        case "SET_NEW_USER":
        return {
            ...action.payload
        }
        case "SET_USER":
            return {
                ...action.payload
            }

            default:
                return state
    }
}