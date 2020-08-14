import React from "react"
import { useSelector } from "react-redux"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"

import { selectUser } from "../../store/User/selectors"

export default function ShoppingCart(){
    const user = useSelector(selectUser)
    console.log("user test", user)


    return (
        <div>
            <h1>
                Check out your future Gems!
            </h1>
            <div>
                <Container>
                    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                    <h4 className="mt-5 mb-5">
                        Order Info:
                    </h4>
                    <Form.Group controlId="formBasicShippingAddress">
                        <Form.Label>
                            Shipping Address:
                        </Form.Label>
                        <Form.Control 
                        as="select"
                        placeholder="User Address"
                        required>
                            <option>My Address</option>
                            <option>Some Where Else</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="formBasicExpressShipping">
                        <Form.Label>
                            Express Shipping:
                        </Form.Label>
                        <Form.Control 
                        as="select"
                        placeholder="--select-option--"
                        required>
                            <option>Yes Please!</option>
                            <option>No Thanks!</option>
                        </Form.Control>
                    </Form.Group>
                    </Form>
                </Container>
            </div>
        </div>
    )
}