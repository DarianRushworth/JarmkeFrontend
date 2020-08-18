import React, { useEffect } from "react"
import { Image, Container, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import "./index.css"

import { getOwnerDetails } from "../../store/Owner/actions"
import { selectOwner } from "../../store/Owner/selectors"

export default function ContactDetails(){
    const dispatch = useDispatch()
    const owner = useSelector(selectOwner)
    // console.log("owner test(selector)", owner)

    useEffect(() => {
        
        dispatch(getOwnerDetails())
    }, [dispatch])
    
    return(
            <Container className="Contact" fluid>
                <Row>
                    <strong>Contact Details</strong>
                </Row>
                <Row md={6} >
                    <Col xs={10} >
                        <strong>Email:</strong>
                    </Col>
                    <Col>
                        {owner.email}
                    </Col>
                </Row>
                <Row md={6}>
                    <Col xs={10}>
                    <strong>Phone:</strong>
                    </Col>
                    <Col>
                        +{owner.phone}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a href="https://www.instagram.com/_jarmke/">
                            <Image 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6EGPAjV4cLjO4uE5FjAIBvTcyWONzY-wAXw&usqp=CAU"
                                roundedCircle 
                                style={{
                                   width: 30,
                                   height: 30,
                                }}/>
                        </a>
                    </Col>
                </Row>
            </Container>
    )
}