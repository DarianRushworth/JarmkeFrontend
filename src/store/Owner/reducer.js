const initialState = {
    loading: true,
}

export default function ownerReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_OWNER":
            return {
                ...action.payload,
                loading: false,
            }

        default:
            return state
    }
}