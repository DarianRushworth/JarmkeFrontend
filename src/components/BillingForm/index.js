import React from "react"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import CardDetails from "../CardDetails"

export default function BillingForm(){
    const stripe = useStripe()
    const elements = useElements()

    const submitted = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }
        const response = await stripe.confirmCardPayment("{CLIENT_SECRET}", {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "DAz",
                }
            }
        })
        if(response.error){
            console.log(response.error.message)
        } else {
            if(response.paymentIntent.status === "succeeded"){
                console.log("success")
            }
        }
    }

    return (
        <form onSubmit={submitted}> 
            <h4>
                Users Billing Info here!
            </h4>
            <CardDetails />
        </form>
    )
}