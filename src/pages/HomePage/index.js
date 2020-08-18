import React from "react"
import { Jumbotron, Image } from "react-bootstrap"
import "./index.css"
import Bio from "../../components/Bio"
import ContactDetails from "../../components/ContactDetails"

const imageUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761978/IMG-1292_zrtuom.jpg"
const jumboUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761569/IMG-1796_m8rmvr.jpg"

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
                        <Image
                            src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597761872/JarmkeBrandingFinal_fdlp0g.jpg"
                            style={{
                                width: 200,
                                height: 100,
                            }} />
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