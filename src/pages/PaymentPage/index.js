import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectUser } from "../../store/User/selectors"
import { addPayment } from "../../store/Order/actions"

export default function PaymentPage(){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log("user test(PAYMENT)", user)

    // useEffect(() => {
    //     dispatch(addPayment(user.token, 1000, "eur"))
    // }, [dispatch, user.token])

    return (
        <h1>
            Payment Page
        </h1>
    )
}