import React, { useState} from "react"
import { useSelector } from "react-redux"
import { Jumbotron, Row } from "react-bootstrap"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"

import Usersfavorites from "../../components/UsersFavorites"
import UserOrders from "../../components/UserOrders"
import { selectUser } from "../../store/User/selectors"

const jumboImage = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761978/IMG-1292_zrtuom.jpg"

export default function ProfilePage(){
    const [FirstName, set_FirstName] = useState("")
    const [LastName, set_LastName] = useState("")
    const [Email, set_Email] = useState("")
    const [Phone, set_Phone] = useState("")
    const [Address, set_Address] = useState("")
    const [DateOfBirth, set_DateOfBirth] = useState("")
    const user = useSelector(selectUser)
    // console.log("user test", user)

    function onSubmit(event){
        event.preventDefault()
    }

    return (
        <div>
            <Jumbotron 
            className="JumboImage"
            style={
                {
                    backgroundImage: `url(${jumboImage})`,
                    height: 250,
                }
            }>
            </Jumbotron>
            <Container fluid>
                <Row>
                <Col>
                <Form>
                <h1 style={{
                    fontFamily: "cursive"
                }}>
                    User's Details:
                </h1>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Control 
                        value={FirstName}
                        onChange={(event) => set_FirstName(event.target.value)}
                        type="input"
                        placeholder={user.firstName}/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Control 
                        value={LastName}
                        onChange={(event) => set_LastName(event.target.value)}
                        type="input"
                        placeholder={user.lastName}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control 
                        value={Email}
                        onChange={(event) => set_Email(event.target.value)}
                        type="email"
                        placeholder={user.email}/>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Control 
                        value={Phone}
                        onChange={(event) => set_Phone(parseInt(event.target.value))}
                        type="input"
                        placeholder={user.phone}/>
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Control 
                        value={Address}
                        onChange={(event) => set_Address(event.target.value)}
                        type="input"
                        placeholder={user.address}/>
                </Form.Group>
                <Form.Group controlId="formBasicDateOfBirth">
                    <Form.Control 
                        value={DateOfBirth}
                        onChange={(event) => set_DateOfBirth(event.target.value)}
                        type="input"
                        placeholder={user.dateOfBirth}/>
                </Form.Group>
                <Form.Group>
                    <Button
                        variant="outline-info"
                        type="submit"
                        onClick={onSubmit}>
                        Make Adjustments!
                    </Button>
                </Form.Group>
                </Form>
                </Col>
                <Col>
                <h1 style={{
                    fontFamily: "cursive",
                }}>
                    Order Details:
                </h1>
                <UserOrders data={user}/>
                </Col>
                </Row>
            </Container>
            <Usersfavorites data={user} />
        </div>
    )
}