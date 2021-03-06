import React from "react"
import { Carousel, Image } from "react-bootstrap"
import "./index.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectError } from "../../store/User/selectors"
import { selectOwner } from "../../store/Owner/selectors"
import Errors from "../../components/Errors"
import ContactDetails from "../../components/ContactDetails"
import LoadingSpinner from "../../components/LoadingSpinner"

const message =
    `jarmké
jewellery`

export default function HomePage() {
    const owner = useSelector(selectOwner)
    const errorRecieved = useSelector(selectError)
    const errorMessage = errorRecieved.message

    const errorDisplay = () => {
        if (errorMessage) {
            return (
                <Errors error={errorMessage} />
            )
        }
    }

    if (!owner.loading) {
        return (
            <div>
                <div>
                    {errorDisplay()}
                    <div className="title_container">
                        <div className="BrandH1">
                            {message}
                        </div>
                    </div>
                    <div>
                        <Carousel className="HomeImage">
                            <Carousel.Item style={
                                {
                                    height: 550,
                                }
                            }>
                                <Image
                                    className="d-block w-100 h-100"
                                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597234454/IMG_5531_aokgfq.jpg"
                                    alt="First Image" />
                                <Carousel.Caption>
                                    <h3 style={{
                                        color: "black",
                                        fontFamily: "Allura",
                                        fontSize: 45
                                    }}>
                                        We specialize in unique handcrafted pieces, that reflect special journeys
                                    </h3>
                                    <Link to="/productsPage">
                                        View our in-store masterpieces.
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={
                                {
                                    height: 550,
                                }
                            }>
                                <Image
                                    className="d-block w-100 h-100"
                                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597234222/IMG_5487_wmrpnq.jpg"
                                    alt="Second Image" />
                                <Carousel.Caption>
                                    <h3 style={{
                                        color: "black",
                                        fontFamily: "Allura",
                                        fontSize: 45,
                                    }}>
                                        Journeys of Physical or mental challenges that you, or your loved ones, have overcome.
                                    </h3>
                                    <Link to="/login">
                                        To have access to all features please Login/Sign-up
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={
                                {
                                    height: 550,
                                }
                            }>
                                <Image
                                    className="d-block w-100 h-100"
                                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597234030/IMG_5555_gxswr0.jpg"
                                    alt="Third Image" />
                                <Carousel.Caption>
                                    <h3 style={{
                                        color: "black",
                                        fontFamily: "Allura",
                                        fontSize: 45,
                                    }}>
                                        We look forward to crafting a special memory for you to cherish, forever.
                                    </h3>
                                    <Link to="https://www.instagram.com/_jarmke/">
                                        To keep up-to-date on my story, follow me on instagram.
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <footer className="contact_footer">
                        <ContactDetails />
                    </footer>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="spinner_container">
                    <LoadingSpinner />
                </div>
                <div className="footer_container">
                    <ContactDetails />
                </div>
            </div>
        )
    }
}