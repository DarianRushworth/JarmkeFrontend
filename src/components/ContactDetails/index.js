import React, { useEffect } from "react"
import { Image, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./index.css"

import { getOwnerDetails } from "../../store/Owner/actions"
import { selectOwner } from "../../store/Owner/selectors"

const message =
    `jarmké
jewellery`

export default function ContactDetails(){
    const history = useHistory()
    const dispatch = useDispatch()
    const owner = useSelector(selectOwner)

    useEffect(() => {
        
        dispatch(getOwnerDetails())
    }, [dispatch])
    
    return(
        <div className="social_footer">
            <div className="social_container">
                <p className="brand">{message}</p>
                <div className="social_icons">
                    <div className="email">
                        <a href={`mailto:${owner.email}`}>
                            <Image 
                                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1610450144/email_nyp4ni.png"
                                alt="Email Logo"
                                rounded
                                style={{
                                    height: 30,
                                    width: 30,
                                }} 
                            />
                        </a>
                    </div>
                    <div className="phone">
                        <Image 
                            src="https://res.cloudinary.com/djzjepmnr/image/upload/v1610450429/mobile-phone_adrr91.png"
                            alt="Phone Logo"
                            rounded
                            style={{
                                height: 30,
                                width: 30,
                            }} 
                        />
                        <span className="phone_number">+{owner.phone}</span>
                    </div>
                    <div className="linkedIn">
                        <a href="https://www.linkedin.com/in/kristina-jarmk%C3%A9-matthews-2671a3101/">
                            <Image 
                                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1610450580/linkedin_urraby.png"
                                alt="LinkedIn Link"
                                rounded
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        </a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/_jarmke/">
                            <Image 
                                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1610450696/instagram_obdf1f.png"
                                alt="Instagram Link"
                                rounded
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className="register_button">
                <Button
                    variant="outline-info"
                    size="lg"
                    onClick={() => history.push("/signup")}
                >Register for Free</Button>
            </div>
            <div className="store_button">
                <Button
                    variant="outline-info"
                    size="lg"
                    onClick={() => history.push("/productsPage")}
                >Store</Button>
            </div>
        </div>
    )
}