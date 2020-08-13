import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { getFavorites } from "../../store/User/actions"

export default function UsersFavorites(props){
    const dispatch = useDispatch()

    useEffect(() => {
        renderOnce()
    }, [])

    function renderOnce(){
        dispatch(getFavorites(props.data.token))
    }
    return (
        <p>
            User Favorites here!
        </p>
    )
}