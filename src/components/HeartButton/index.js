import React from "react"
import { useSelector } from "react-redux"

import { selectFavorites } from "../../store/User/selectors"
import "./index.css"

export default function HeartButton(props){
    const favorites = useSelector(selectFavorites)
    // console.log("favorites test", favorites)
    const product = props.data
    // console.log("product prop test", product)

    const favoriteOrNot = favorites.find(favorite => product.id === favorite.id)

    const displayHeart = favoriteOrNot
                        ? <h3
                            className="heart">❤</h3>
                        : <h3
                            className="heart">♡</h3>
    return (
        <div>
            {displayHeart}
        </div>
    )
}