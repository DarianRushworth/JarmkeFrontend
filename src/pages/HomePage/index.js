import React from "react"
import { Jumbotron } from "react-bootstrap"
import "./index.css"
import Bio from "../../components/Bio"

const imageUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597221407/IMG_5465_gmhofp.jpg"

export default function HomePage(){

    return(
        <div 
            style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            }
            className="HomeImage">
            <div>
                <header>
                    <Jumbotron>
                        <h1>
                            Home Page
                        </h1>
                    </Jumbotron>

                </header>
            </div>
            <div>
                <body>
                    <Bio />
                </body>
            </div>
        </div>
    )
}