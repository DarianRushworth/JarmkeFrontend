import React from "react"
import { useSelector } from "react-redux"

import { selectUser } from "../../store/User/selectors"

export default function ProfilePage(){
    const user = useSelector(selectUser)
    console.log("user test", user)
    return (
        <h1>
            Profile Page
        </h1>
    )
}