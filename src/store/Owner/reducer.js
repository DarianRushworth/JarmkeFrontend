const initialState = {}

export default function ownerReducer(state = initialState, action){
    switch(action.type){
        case "SET_OWNER":
            return {
                ...action.payload
            }

            default:
                return state
    }
}