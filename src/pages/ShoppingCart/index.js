import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    Form,
    Container,
    Col
} from "react-bootstrap"
import { useHistory } from "react-router"

import ProductsOrdered from "../../components/ProductsOrdered"
import { selectUser } from "../../store/User/selectors"
import { getOrderedProducts, addShipping } from "../../store/Order/actions"
import { selectOrderData } from "../../store/Order/selectors"

export default function ShoppingCart(){
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    // console.log("user test", user)
    const orderData = useSelector(selectOrderData)
    // console.log("order data test", orderData)

    if(!user){
        history.push("/")
    }

    const order = user.orders.find(order => order.completed === false)
    // console.log("order test(CART)", order)

    if(!order){
        history.push("/productsPage")
    }
    
    useEffect(() => {
        dispatch(getOrderedProducts(order.id, user.token))
    }, [dispatch])

    function sendShipping(shipping, token){
        if(shipping === "true"){
            dispatch(addShipping(token, shipping))
        }
    }
    


    return (
        <div>
            <h1>
                Check out your future Gems!
            </h1>
            <ProductsOrdered data={orderData}/>
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
                        onChange={(event) => sendShipping(event.target.value, user.token)} 
                        as="select"
                        required>
                            <option>--Select-Shipping--</option>
                            <option
                            value="true">Yes Please, within 5 working days(€50)</option>
                            <option
                            value="false">No Thanks!</option>
                        </Form.Control>
                    </Form.Group>
                    </Form>
                </Container>
            </div>
        </div>
    )
}