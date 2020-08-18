import React from "react"
import { CardElement } from "@stripe/react-stripe-js"
import "./index.css"

export default function CardDetails(){
    const CardSetup = {
      iconStyle: 'solid',
      style: {
        base: {
          
          iconColor: '#c4f0ff',
          color: '#000000',
          fontWeight: 500,
          fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
          fontSize: '16px',
          fontSmoothing: 'antialiased',
          ':-webkit-autofill': {color: '#fce883'},
          '::placeholder': {color: '#87bbfd'},
        },
        invalid: {
          iconColor: '#ffc7ee',
          color: '#ffc7ee',
        },
      },
    }

    return (
        <label>
          Card Details
          <div>
            <CardElement options={CardSetup}/>
          </div>
        </label>
    )
}
