import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { newFavorite, removeFavorite } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"
import { selectUser } from "../../store/User/selectors"
import "./index.css"

export default function HeartButton(props){
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    // console.log("favorites test", favorites)
    const user = useSelector(selectUser)
    // console.log("user test", user.token)
    const product = props.data
    // console.log("product prop test", product)

    const favoriteOrNot = favorites.find(favorite => product.id === favorite.id)

    const displayHeart = favoriteOrNot
                        ? <button
                            className="heart"
                            onClick={() => unFavoriteThis(product.id, user.token)}
                            >❤</button>
                        : <button
                            className="heart"
                            onClick={() => favoriteThis(product.id, user.token)}
                            >♡</button>

    function favoriteThis(id, token){
        dispatch(newFavorite(id, token))
    }
    function unFavoriteThis(id, token){
        dispatch(removeFavorite(id, token))
    }

    return (
        <div>
            {displayHeart}
        </div>
    )
}