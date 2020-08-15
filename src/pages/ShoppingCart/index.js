import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    Form,
    Container,
    Col,
    Button,
    Alert
} from "react-bootstrap"
import { useHistory } from "react-router"

import ProductsOrdered from "../../components/ProductsOrdered"
import { selectUser } from "../../store/User/selectors"
import { 
    getOrderedProducts, 
    addShipping,
    addShippingAddress  } from "../../store/Order/actions"
import { selectOrderData } from "../../store/Order/selectors"

export default function ShoppingCart(){
    const [display, set_Display] = useState(false)
    const [message, set_Message] = useState(false)
    const [streetName, set_StreetName] = useState("")
    const [houseNumber, set_HouseNumber] = useState("")
    const [postalCode, set_PostalCode] = useState("")
    const [district, set_District] = useState("")
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

    function onSubmit(event){
        event.preventDefault()
        const address =
        `${streetName} ${houseNumber}, ${postalCode}, ${district}`
        dispatch(addShippingAddress(user.token, address))
        set_Display(false)
        set_Message(true)
    }
    const alertMessage = message
            ? <Alert variant="success">
                <Alert.Heading>
                    Address Shipping To:
                </Alert.Heading>
                <hr />
                <p>
                    {`${streetName} ${houseNumber}, ${postalCode}, ${district}`}
                </p>
                <Button
                    onClick={() => set_Message(false)}>
                    Close
                </Button>
            </Alert>
            : ""
        
    const otherAddress = display
        ?
        <Container>
            <Form.Group controlId="formBasicStreetName">
                <Form.Label>
                    Street Name:
                </Form.Label>
                <Form.Control
                    value={streetName}
                    onChange={(event) => set_StreetName(event.target.value)} 
                    type="input"
                    placeholder="Street Name Here"
                    required/>
            </Form.Group>
            <Form.Group controlId="formBasicHouseNumber">
                <Form.Label>
                    House Number:
                </Form.Label>
                <Form.Control
                    value={houseNumber}
                    onChange={(event) => set_HouseNumber(event.target.value)}
                    type="input"
                    placeholder="House Number Here"
                    required/>
            </Form.Group>
            <Form.Group controlId="formBasicPostalCode">
                <Form.Label>
                    Postal Code:
                </Form.Label>
                <Form.Control 
                     value={postalCode}
                     onChange={(event) => set_PostalCode(event.target.value)}
                    type="input"
                    placeholder="Postal Code Here"
                    required/>
            </Form.Group>
            <Form.Group controlId="formBasicDistrict">
                <Form.Label>
                    District:
                </Form.Label>
                <Form.Control 
                     value={district}
                     onChange={(event) => set_District(event.target.value)}
                    type="input"
                    placeholder="District Here"
                    required/>
            </Form.Group>
            <Form.Group>
                <Button
                    variant="info"
                    type="submit"
                    onClick={onSubmit}
                    >
                    Submit Address
                </Button>
            </Form.Group>
        </Container>
        : "Double Check Your Address"


    return (
        <div>
            <h1>
                Check out your future Gems!
            </h1>
            <ProductsOrdered data={orderData}/>
            <div>
                {alertMessage}
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
                            <option>{user.address}</option>
                            <option
                            value="elseWhere"
                            onClick={() => set_Display(true)}>Some Where Else</option>
                        </Form.Control>
                    </Form.Group>
                    {otherAddress}
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
                    <Form.Group>
                    <Button
                    href="/payment"
                    variant="info">
                        Payment Details
                    </Button>
                    </Form.Group>
                    </Form>
                </Container>
            </div>
        </div>
    )
}