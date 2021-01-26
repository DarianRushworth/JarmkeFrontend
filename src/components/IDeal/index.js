import React from "react"
import { IdealBankElement } from "@stripe/react-stripe-js"
import "./index.css"

export default function IDeal(){
    const ideal_options = {
        style: {
          base: {
            padding: '10px 12px',
            color: '#32325d',
            fontSize: '16px',
            '::placeholder': {
              color: '#aab7c4'
            },
          },
        },
    }

    return (
        <div className="card_element">
            <IdealBankElement options={ideal_options}/>
        </div>
    )
}