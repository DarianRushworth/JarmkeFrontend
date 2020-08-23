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
        <Container>
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpZ4d2bVmyOhUZ0W0YyFgyiyUDENP7IOK7UA&usqp=CAU"
                    alt="Email Logo"
                    rounded
                    style={{
                        height: 30,
                        width: 30,
                    }} />
                    {owner.email}
            </Col>
        </Row>
        <Row>
            <Col style={{
                paddingTop: 20,
            }}>
            <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkwOs7_zHl5ukfCD2-YwCT8WbYXyRCKgj7dw&usqp=CAU"
                    alt="Phone Logo"
                    rounded
                    style={{
                        height: 28,
                        width: 28,
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
                variant="outline-danger"
                onClick={redirect}>
                Register for Free
            </Button>
            </Col>
            <Col xs={6} md={{span: 3, offset: 2}}>
            <ul>
        <li>
                <Image 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWl-__Cv45Tlw4YFU3pIsRwHaKOHbiCIxn1g&usqp=CAU"
                    alt="LinkedIn Link"
                    rounded
                    style={{
                        height: 60,
                        width: 60,
                    }}/>                           
        </li>
        <li>
                <Image 
                    src="https://img.icons8.com/carbon-copy/2x/instagram-new.png"
                    alt="Instagram Link"
                    rounded
                    style={{
                        height: 60,
                        width: 60,
                    }}/>
        </li>
    </ul>
            </Col>
        </Row>
    </Container>
    )
}