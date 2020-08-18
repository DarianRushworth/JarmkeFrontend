import React from "react"
import { useSelector, useDispatch } from "react-redux"

import { newFavorite, removeFavorite } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"
import "./index.css"
import { Button } from "react-bootstrap"

export default function HeartButton(props){
    const dispatch = useDispatch()
    const favorites = useSelector(selectFavorites)
    // console.log("favorites test", favorites)
    const product = props.data
    // console.log("product prop test", product)

    const favoriteOrNot = favorites.find(favorite => product.id === favorite.id)

    const displayHeart = favoriteOrNot
                        ? <Button
                            variant="outline-danger"
                            onClick={() => unFavoriteThis(product.id)}
                            >❤</Button>
                        : <Button
                            variant="outline-danger"
                            onClick={() => favoriteThis(product.id)}
                            >♡</Button>

    function favoriteThis(id){
        dispatch(newFavorite(id))
    }
    function unFavoriteThis(id){
        dispatch(removeFavorite(id))
    }

    return (
        <div>
            {displayHeart}
        </div>
    )
}