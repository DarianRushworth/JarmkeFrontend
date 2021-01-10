import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentInfo from "../../components/PaymentInfo"

const stripePromise = loadStripe("pk_test_51HGVaXE1l9Lb6wo5PB3AAwHvhJxQvN3AHSNc9KOijpgpcB44vjw5IgF1MX09Rl5T1WFHQe7HtQS3UP0oNkNFJMiz00zLZRunTA")

export default function CheckoutPage(){
    return (
        <div>
            <Elements stripe={stripePromise}>
                <PaymentInfo />
            </Elements>
        </div>
    )
}