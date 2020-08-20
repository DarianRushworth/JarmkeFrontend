import React from "react"
import { Jumbotron, Image } from "react-bootstrap"
import "./index.css"
import Bio from "../../components/Bio"
import ContactDetails from "../../components/ContactDetails"

const imageUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597909463/NewHomeBlur_inz2fw.jpg"
const jumboUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761569/IMG-1796_m8rmvr.jpg"

const message = 
`jarmke
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
            <div
                style={
                    {
                        backgroundImage: `url(${imageUrl})`
                    }
                }
                className="HomeImage">
                    <Bio />
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