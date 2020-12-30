export const selectUser = state => {
    return state.user.data
}

export const selectFavorites = state => {
    return state.user.favorites
}

export const selectToken = state => {
    return state.user.token
}

export const selectError = state => {
    return state.user.error
}

export const selectSpinner = state => {
    return state.user.loading
}