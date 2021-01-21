import React from "react"
import { useHistory } from "react-router"
import { Image, Button } from "react-bootstrap"

export default function PaymentFailure(){
    const history = useHistory()
    return (
        <div className="success_container">
            <div className="success_title">
                <h3>
                    Payment Unsuccessful
                </h3>
            </div>
            <Image
                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1611239888/cancel_svatnz.png"
                alt="Payment Unsuccessful"
                className="success_image"
            />
            <div className="success_body">
                <h5>
                    Please check your account to make sure.
                </h5>
                <p>
                    Payment not completed please check details and try again.
                </p>
            </div>
            <div className="success_buttons">
                <Button
                    variant="danger"
                    className="succes_home"
                    onClick={() => history.push("/")}>
                    Home
                </Button>
                <Button
                    variant="danger"
                    className="success_store"
                    onClick={() => history.push("/productsPage")}>
                    Store
                </Button>
            </div>
        </div>
    )
}