import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from 'axios';
import {
    Form,
    Container,
    Col,
    Button,
    Alert,
    Row
} from "react-bootstrap"
import { useHistory } from "react-router"
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'

import CardDetails from "../../components/CardDetails"
import ProductsOrdered from "../../components/ProductsOrdered"
import PaymentTotal from "../../components/PaymentTotal"
import { selectUser } from "../../store/User/selectors"
import { 
    addPayment,
    getOrderedProducts, 
    addShipping,
    addShippingAddress,  
    addOrderProduct} from "../../store/Order/actions"
import { selectOrderData } from "../../store/Order/selectors"
import { apiUrl } from "../../config/constants"

export default function ShoppingCart(){
    const stripe = useStripe()
    const elements = useElements()
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

    const tokenNeeded =user.token

    if(!user){
        history.push("/")
    }

    const order = user.orders.find(order => order.completed === false)
    // console.log("order test(CART)", order)

    if(!order){
        history.push("/productsPage")
    }
    
    useEffect(() => {
        dispatch(getOrderedProducts(order.id))
    }, [dispatch])

    function sendShipping(shipping){
        dispatch(addShipping(shipping))
    }

    const submitted = async (event) => {
        event.preventDefault()

        const address =
        `${streetName} ${houseNumber}, ${postalCode}, ${district}`
        dispatch(addShippingAddress(address))
        
        set_Display(false)
        set_Message(true)

        if(!stripe || !elements){
            return
        }

        const clientSecret = await axios.post(`${apiUrl}/payment`,{
            amount: orderData.total*100,
            currency: "eur",
        },{
            headers: {
                Authorization: `Bearer ${tokenNeeded}`
            }
        })
        // console.log('secret matias', clientSecret);
        const response = await stripe.confirmCardPayment(clientSecret.data.client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: `${user.firstName} ${user.lastName}`,
                    email: user.email,
                    phone: user.phone,
                    address: user.address,
                }
            }
        })
        // console.log('success a', response)
        if(response.error){
            console.log(response.error.message)
        } else {
            if(response.paymentIntent.status === "succeeded"){
                history.push("/profilePage")
                dispatch(addOrderProduct(clientSecret.data.order))
                dispatch(addPayment(orderData.total))
                // console.log("success")
            }
        }
    }

    function onSubmit(event){
        event.preventDefault()
        const address =
        `${streetName} ${houseNumber}, ${postalCode}, ${district}`
        dispatch(addShippingAddress(address))
        set_Display(false)
        set_Message(true)
    }
    const alertMessage = message
            ? <Alert variant="success">
                <Form as={Col} md={{span: 6, offset: 3}} className="mt-5"
                      onSubmit={submitted}>
                <Alert.Heading>
                    Payment Details:
                </Alert.Heading>
                <hr />
                <div>
                    <div>
                        <p>
                            Shipping Address:
                        </p>
                    </div>
                    <div>
                        <p>
                            {orderData.shippingAddress}
                        </p>
                        <hr />
                    </div>
                    <div>
                        <p>
                            Express Shipping:
                        </p>
                    </div>
                    <div>
                        <p>
                            {JSON.stringify(orderData.expressShipping)}
                        </p>
                        <hr />
                    </div>
                    <div>
                        <p>
                            Products:
                        </p>
                    </div>
                    <div>
                        <ul>
                        {orderData.products.map(product => {
                            return (
                                <li>{product.title}</li>
                            )
                        })}
                        </ul>
                        <hr />
                    </div>
                    <div>
                        <p>
                            Total:
                        </p>
                    </div>
                    <div>
                        <p>
                            €{orderData.total}
                        </p>
                        <hr />
                    </div>
                </div>
                <div>
                    <CardDetails />
                    <hr />
                </div>
                <div>
                <Button
                    onClick={(e) => {
                        set_Message(false)
                        submitted(e)
                    }}>
                    Pay
                </Button>
                <Button
                    variant="danger"
                    onClick={() => {
                        set_Message(false)
                    }}>
                    Abort
                </Button>
                </div>
                </Form>
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
            <head>
                <script
                    src="https://js.stripe.com/v3/"
                ></script>
            </head>
            <ProductsOrdered data={orderData}/>
            <Container fluid>
                    {alertMessage}
                </Container>
            <div>
                <Container fluid>
                    <Row>
                    <Col md={{span: 3, offset: 3}}>
                    <Form>
                    <h4>
                        Shipping Info:
                    </h4>
                    <Form.Group controlId="formBasicShippingAddress">
                        <Form.Label>
                            Shipping Address:
                        </Form.Label>
                        <Form.Control 
                        as="select"
                        required>
                            <option
                            onClick={() => {
                                dispatch(addShippingAddress(user.address))}}
                            >{user.address}</option>
                            <option
                            value="elseWhere"
                            onClick={() => set_Display(true)}
                            >Some Where Else</option>
                        </Form.Control>
                    </Form.Group>
                    {otherAddress}
                    <Form.Group controlId="formBasicExpressShipping">
                        <Form.Label>
                            Express Shipping:
                        </Form.Label>
                        <Form.Control
                        onChange={(event) => {
                            console.log(event.target.value)
                            sendShipping(event.target.value)
                            set_Message(true)}} 
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
                    <Col>
                    <h4>
                        Total:
                    </h4>
                        <PaymentTotal data={orderData} />
                    </Col>
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}