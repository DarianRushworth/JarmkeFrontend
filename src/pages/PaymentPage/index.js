import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { selectUser } from "../../store/User/selectors"
import { addPayment } from "../../store/Order/actions"
import BillingForm  from "../../components/BillingForm"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe("pk_test_51HGVaXE1l9Lb6wo5PB3AAwHvhJxQvN3AHSNc9KOijpgpcB44vjw5IgF1MX09Rl5T1WFHQe7HtQS3UP0oNkNFJMiz00zLZRunTA")

export default function PaymentPage(){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log("user test(PAYMENT)", user)

    useEffect(() => {
        dispatch(addPayment(1000, "eur"))
    }, [dispatch, user.token])

    return (
        <div>
        <h1>
            Payment Page
        </h1>
        <Elements stripe={stripePromise}>
        <BillingForm />
        </Elements>
        </div>
    )
}