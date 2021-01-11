import React from "react"
import { Image } from "react-bootstrap"
import "./index.css"

export default function LoadingSpinner(){
    return(
        <div className="loader">
            <Image
                className="loader_image"
                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597914048/LogoEdit_jsikpf.jpg"
                roundedCircle
            />
        </div>
    )
}