import React from "react"
import { Jumbotron, Carousel, Image } from "react-bootstrap"
import "./index.css"
import ContactDetails from "../../components/ContactDetails"
import { Link } from "react-router-dom"

// const imageUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597909463/NewHomeBlur_inz2fw.jpg"
const jumboUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761569/IMG-1796_m8rmvr.jpg"

const message = 
`jarmké
jewellery`
export default function HomePage(){

    return(
        <div>
        <div>
            <div>
                <header>
                    <Jumbotron
                    className="JumboImage"
                    style={{
                        backgroundImage: `url(${jumboUrl})`,
                        height: 200,
                    }}>
                        <h1 className="BrandH1">
                            {message}
                        </h1>
                    </Jumbotron>

                </header>
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
                                alt="First Image"/>
                            <Carousel.Caption>
                                <h3 style={{
                                    color: "black",
                                    fontFamily: "cursive",
                                    fontSize: 45}}>
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
                                alt="Second Image"/>
                            <Carousel.Caption>
                                <h3 style={{
                                    color: "black",
                                    fontFamily: "cursive",
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
                                alt="Third Image"/>
                            <Carousel.Caption>
                                <h3 style={{
                                    color: "black",
                                    fontFamily: "cursive",
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
        </div>
        <div style={{
            backgroundColor: "#526f85",
        }}>
            <footer>
                <ContactDetails />
            </footer>
        </div>
        </div>
    )
}