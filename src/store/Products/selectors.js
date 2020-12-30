export const selectProducts = state => {
    return state.products.allJewellery
}

export const selectProduct = state => {
    return state.products.specificPiece
}

export const selectError = state => {
    return state.products.error
}

export const selectLoader = state => {
    return state.products.loading
}