import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    Form,
    Container,
    Col
} from "react-bootstrap"
import { useHistory } from "react-router"

import { selectUser } from "../../store/User/selectors"
import { getOrderedProducts } from "../../store/Order/actions"

export default function ShoppingCart(){
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    // console.log("user test", user)

    const order = user.orders.find(order => order.completed === false)
    // console.log("order test(CART)", order)
    
    if(!order){
        history.push("/productsPage")
    }
    
    useEffect(() => {
        dispatch(getOrderedProducts(order.id, user.token))
    }, [dispatch])
    


    return (
        <div>
            <h1>
                Check out your future Gems!
            </h1>
            <div>
                <Container>
                    <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                    <h4 className="mt-5 mb-5">
                        Shipping Info:
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