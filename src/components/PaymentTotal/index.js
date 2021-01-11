import React from "react"
import { InputGroup, FormControl } from "react-bootstrap"

export default function PaymentTotal(props){
    const orderData = props.data
    return (
        <div className="card_button">
            <InputGroup style={{
                width: 150,
            }}>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                            €
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                aria-label="Total of Products(in Euros)"
                placeholder={orderData.total}
                disabled />
                <InputGroup.Append>
                    <InputGroup.Text>
                        .00
                    </InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}