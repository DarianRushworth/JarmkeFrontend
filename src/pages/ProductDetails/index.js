import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"

import { getSpecificProduct } from "../../store/Products/actions"

export default function ProductDetails(){
    const dispatch = useDispatch()
    const idNeeded = parseInt(useParams().id)
    // console.log("params test", idNeeded)

    useEffect(() => {
        dispatch(getSpecificProduct(idNeeded))
    })
    return (
        <h1>
            Details Page
        </h1>
    )
}