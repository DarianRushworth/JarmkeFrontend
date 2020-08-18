import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"
import { useHistory } from "react-router"

import { getFavorites } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"

export default function UsersFavorites(){
    const dispatch = useDispatch()
    const history = useHistory()
    const favorites = useSelector(selectFavorites)
    // console.log("favorites out of state", favorites)


    const displayFavorites = favorites.length >= 2
                            ? favorites.map(favorite => {
                                return (
                                        <td>
                                            <img
                                            key={favorite.id}
                                            src={favorite.image}
                                            alt="product"
                                            onClick={(event) => history.push(`/moreDetails/${favorite.id}`)} />
                                        </td>
                                )
                            })
                            : "Loading..."

    function renderOnce(){
        if(favorites.length === 0)
        dispatch(getFavorites())
    }

    useEffect(() => {
        renderOnce()
    }, [renderOnce])

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <strong>Favorites:</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {displayFavorites}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}