import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap"

import { getFavorites } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"

export default function UsersFavorites(props){
    const dispatch = useDispatch()
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
                                            value={favorite.id} />
                                        </td>
                                )
                            })
                            : "Loading..."

    useEffect(() => {
        renderOnce()
    }, [])

    function renderOnce(){
        dispatch(getFavorites(props.data.token))
    }
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