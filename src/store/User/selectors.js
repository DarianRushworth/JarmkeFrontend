export const selectUser = state => {
    return state.user.data
}

export const selectFavorites = state => {
    return state.user.favorites
}

export const selectToken = state => {
    return state.user.token
}