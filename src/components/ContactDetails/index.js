import React, { useEffect } from "react"
import { Image, Container, Col, Row, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import "./index.css"

import { getOwnerDetails } from "../../store/Owner/actions"
import { selectOwner } from "../../store/Owner/selectors"

export default function ContactDetails(){
    const history = useHistory()
    const dispatch = useDispatch()
    const owner = useSelector(selectOwner)
    // console.log("owner test(selector)", owner)

    useEffect(() => {
        
        dispatch(getOwnerDetails())
    }, [dispatch])

    function redirect(){
        history.push("/signup")
    }
    
    return(
        <Container fluid>
        <Row>
            <Col xs={12} md={8}>
                <h2 style={{
                    fontFamily: "cursive",
                    fontSize: 45,
                }}>
                    Contact
                </h2>
                <Row>
                    <Col xs={8} md={9}>
                        <hr className="horLine"/>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row>
            <Col>
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEH_3qLSdFoDkWTSEUMoj6IevjAgdf99hxQQ&usqp=CAU"
                    alt="Email Logo"
                    rounded
                    style={{
                        height: 20,
                        width: 20,
                    }} />
                    {owner.email}
            </Col>
        </Row>
        <Row>
            <Col style={{
                paddingTop: 20,
            }}>
            <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrELLkJfngeqCTqkZ1Gh6CTFJ4vKfC4FfpaA&usqp=CAU"
                    alt="Phone Logo"
                    rounded
                    style={{
                        height: 20,
                        width: 20,
                    }} />
                    +{owner.phone}
            </Col>
        </Row>
        <Row>
            <Col xs={8} md={6}>
                <hr className="horLine"/>
            </Col>
        </Row>
        <Row>
            <Col xs={6} md={2}
                style={{
                    paddingTop: 10,
                }}>
            <Button
                variant="outline-warning"
                onClick={redirect}>
                Register for Free
            </Button>
            </Col>
            <Col xs={6} md={2}>
                <a href="https://www.linkedin.com/in/kristina-jarmk%C3%A9-matthews-2671a3101/">
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcST2Ov1fr2BdlWyRkTdsOTJYiq1FNfi_qO7Kg&usqp=CAU"
                    alt="LinkedIn Link"
                    rounded
                    style={{
                        height: 40,
                        width: 30,
                        paddingTop: 10,
                    }}/>
                </a>
                    Kristina Jarmké Matthews
            </Col>                           
            <Col xs={6} md={{span: 1, offset: 1}}>
                <a href="https://www.instagram.com/_jarmke/">
                <Image 
                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1598186039/Insta_sywn89.jpg"
                    alt="Instagram Link"
                    rounded
                    style={{
                        height: 40,
                        width: 30,
                        paddingTop: 10,
                    }}/>
                </a>
                    @_jarmke
            </Col>
        </Row>
    </Container>
    )
}