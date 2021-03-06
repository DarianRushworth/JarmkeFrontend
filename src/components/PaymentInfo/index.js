import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
    Form,
    Button,
    Figure,
    Image
} from "react-bootstrap"
import { useHistory } from "react-router"
import { useStripe, useElements, CardElement, IdealBankElement } from '@stripe/react-stripe-js'

import CardDetails from "../CardDetails"
import PaymentTotal from "../PaymentTotal"
import { selectUser } from "../../store/User/selectors"
import {
    addPayment,
    getOrderedProducts,
    addShipping,
    addShippingAddress,
    getSecretKey,
    getCountries,
} from "../../store/Order/actions"
import { selectOrderData } from "../../store/Order/selectors"
import "./index.css"
import LoadingSpinner from "../LoadingSpinner";
import IDeal from "../IDeal"


export default function PaymentInfo() {
    const stripe = useStripe()
    const elements = useElements()
    const [method, setMethod] = useState("deciding")
    const [express, setExpress] = useState("outline-danger")
    const [standard, setStandard] = useState("outline-danger")
    const [loading, setLoading] = useState(false)
    const [display, set_Display] = useState(false)
    const [streetName, set_StreetName] = useState("")
    const [houseNumber, set_HouseNumber] = useState("")
    const [postalCode, set_PostalCode] = useState("")
    const [district, set_District] = useState("")
    const [countryNeeded, setCountryNeeded] = useState("")
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const orderData = useSelector(selectOrderData)

    const order = user.orders.find(order => order.completed === false)

    useEffect(() => {
        dispatch(getOrderedProducts(order.id))

        dispatch(getSecretKey(orderData.total))

        dispatch(getCountries())
    }, [dispatch, order.id, orderData.total])

    function sendShipping(shipping, class_name) {
        dispatch(addShipping(shipping))
        class_name === "standard_ship"
        ? setStandard("danger")
        : setExpress("danger")
    }

    const submitted = async (event) => {
        event.preventDefault()

        const address =
            `${streetName} ${houseNumber}, ${postalCode}, ${district}`
        dispatch(addShippingAddress(address))

        set_Display(false)

        if (!stripe || !elements) {
            return
        }

        if(method === "Card Payment"){

        const response = await stripe.confirmCardPayment(orderData.client_secret, {
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
        
        if (response.error) {
            history.push("/failure")
        } else {
            if (response.paymentIntent.status === "succeeded") {
                history.push("/success")
                dispatch(addPayment(orderData.total))
            }
        }
        } else if(method === "IDeal Payment"){

            const idealBank = elements.getElement(IdealBankElement)

            const {error} = await stripe.confirmIdealPayment(orderData.client_secret, {
                payment_method: {
                    ideal: idealBank,
                    billing_details: {
                        name: `${user.firstName} ${user.lastName}`,
                    },
                },
                return_url: "http://localhost:3000/success"
            })
            
            if(error){
                history.push("/failure")
            }
        }
    }

    function onSubmit(event) {
        event.preventDefault()
        const address =
            `${streetName} ${houseNumber}, ${postalCode}, ${district}, N/A, ${countryNeeded}`
        dispatch(addShippingAddress(address))
        set_Display(false)
    }

    const cities = orderData.cities.filter(city => city.country === countryNeeded)
    const neededCities = cities.map(city => { 
        return <option value={city.city} onClick={(event) => set_District(event.target.value)}>{city.city}</option>
    })

    const info_checker =
        <div className="shipping_info">
            <div>
                <p>
                    Shipping Address:
                </p>
            </div>
            <div>
                <p>
                    {orderData.shippingAddress.split().length === 1 ? user.address : orderData.shippingAddress}
                </p>
                <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => set_Display(true)}>
                    Change Address
                </Button>
                <hr />
            </div>
            <div>
                <p>
                    Express Shipping:
                </p>
            </div>
            <div>
                <Button
                    variant={standard}
                    className="standard_ship"
                    value={false}
                    onClick={(event) => {
                        sendShipping(event.target.value, "standard_ship")
                    }}>
                    Standard 3 Day Delivery
                </Button>
                <Button
                    variant={express}
                    className="express_ship"
                    value={true}
                    onClick={(event) => {
                        sendShipping(event.target.value, "express_ship")
                    }}>
                    Over Night Shipping +€50
                </Button>
                <hr />
            </div>
            <div>
                <p>
                    Products:
                </p>
            </div>
            <div className="product_container">
                {orderData.products.map(product => {
                    return (
                        <div className="checkout_product">
                            <Figure>
                                <Figure.Image 
                                    className="checkout_img" 
                                    src={product.image}
                                    alt="Product" 
                                />
                                <Figure.Caption>
                                    €{product.price}
                                </Figure.Caption>
                            </Figure>
                        </div>
                    )
                })}
                <hr />
            </div>
            <div>
                <p>
                    Total:
                </p>
            </div>
            <div>
                <PaymentTotal data={orderData}/>
                <hr />
            </div>
        </div>
        
    
    const otherAddress =
        <div className="shipping_info">
            <div className="street_num">
                <Form.Group controlId="formBasicStreetName" className="form_inputs">
                    <Form.Label>
                        Street Name:
                    </Form.Label>
                    <Form.Control
                        value={streetName}
                        onChange={(event) => set_StreetName(event.target.value)}
                        type="input"
                        placeholder="Street Name Here"
                        required />
                </Form.Group>
            </div>
            <div className="street_num">
            <Form.Group controlId="formBasicHouseNumber" className="form_input_double">
                    <Form.Label>
                        House Number:
                    </Form.Label>
                    <Form.Control
                        value={houseNumber}
                        onChange={(event) => set_HouseNumber(event.target.value)}
                        type="input"
                        placeholder="House Number Here"
                        required />
                </Form.Group>
            <Form.Group controlId="formBasicCountry" className="form_input_double">
                <Form.Label>Select Country</Form.Label>
                <Form.Control as="select">
                    {orderData.countries.map(country => {
                        return <option value={country.name} onClick={(event) => setCountryNeeded(event.target.value)}>
                                {country.name}</option>})}
                </Form.Control>
            </Form.Group>
            </div>
            <div className="street_num">
                <Form.Group controlId="formBasicPostalCode" className="form_input_double">
                    <Form.Label>
                        Postal Code:
                    </Form.Label>
                    <Form.Control
                        value={postalCode}
                        onChange={(event) => set_PostalCode(event.target.value)}
                        type="input"
                        placeholder="Postal Code Here"
                        required />
                </Form.Group>
                <Form.Group controlId="formBasicDistrict" className="form_input_double">
                    <Form.Label>Select City</Form.Label>
                    <Form.Control as="select">
                        {neededCities}
                    </Form.Control>
                </Form.Group>
            </div>
            <Form.Group>
                <Button
                    variant="info"
                    type="submit"
                    onClick={onSubmit}
                >
                    Submit Address
                </Button>
            </Form.Group>
        </div>

    const paymentMethods =
        <div className="card_info">
            <h5 className="card_details">
            Payment Methods
            </h5>
            <div className="card_button">
                <div className="card_payment">
                    <Image
                        src="https://res.cloudinary.com/djzjepmnr/image/upload/v1611133946/credit-card_dc7bwl.png"
                        alt="Card Payment"
                        className="payment_image"
                        rounded
                        value="card"
                        onClick={(e) => setMethod(e.target.alt)}
                    />
                </div>
                <div className="ideal_payment">
                    <Image
                        src="https://res.cloudinary.com/djzjepmnr/image/upload/v1611134208/ideal_svwh2t.png"
                        alt="IDeal Payment"
                        className="payment_image"
                        rounded
                        value="ideal"
                        onClick={(e) => setMethod(e.target.alt)}
                    />
                </div>
            </div>
        </div>

    const cardMethod = 
        <div className="card_info">
            <h5 className="card_details">
                Card Details
            </h5>
            <div>
                <CardDetails />
                <hr />
            </div>
            <div className="card_button">
                <div className="pay_button">
                    <Button
                        onClick={(e) => {
                            setLoading(true)
                            submitted(e)
                        }}>
                        Pay
                    </Button>
                </div>
                <div className="abort_button">
                    <Button
                        variant="danger"
                        onClick={() => {
                            history.push("/")
                        }}>
                        Abort
                    </Button>
                </div>
            </div>
        </div>
    
    const idealMethod = 
        <div className="card_info">
            <h5 className="card_details">
                Ideal Details
            </h5>
            <div>
                <IDeal />
            </div>
            <div className="card_button">
                <div className="pay_button">
                    <Button
                        variant="info"
                        onClick={(e) => {
                            setLoading(true) 
                            submitted(e)}}>
                        Submit Payment
                    </Button>
                </div>
                <div className="abort_button">
                    <Button
                            variant="danger"
                            onClick={() => {
                                history.push("/")
                            }}>
                            Abort
                    </Button>
                </div>
            </div>
        </div>

        return (
            <div>
                <div>
                    <div className="checkout_container">
                        {loading ? <LoadingSpinner /> : display ? otherAddress : info_checker}
                        {method === "deciding" ? paymentMethods : method === "Card Payment" ? cardMethod : idealMethod}
                    </div>
                </div>
            </div>
        )
    }