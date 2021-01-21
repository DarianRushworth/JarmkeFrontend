import React from "react"
import { useHistory } from "react-router"
import { Image, Button } from "react-bootstrap"
import "./index.css"

export default function PaymentSuccess(){
    const history = useHistory()
    return (
        <div className="success_container">
            <div className="success_title">
                <h3>
                    Payment Successful
                </h3>
            </div>
            <Image
                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1611227621/check_afjti1.png"
                alt="Payment Success"
                className="success_image"
            />
            <div className="success_body">
                <h5>
                    Thank you for shopping at Jarmke Jewellery
                </h5>
                <p>
                    Please see email for confirmation.
                </p>
            </div>
            <div className="success_buttons">
                <Button
                    variant="success"
                    className="succes_home"
                    onClick={() => history.push("/")}>
                    Home
                </Button>
                <Button
                    variant="success"
                    className="success_store"
                    onClick={() => history.push("/productsPage")}>
                    Store
                </Button>
            </div>
        </div>
    )
}