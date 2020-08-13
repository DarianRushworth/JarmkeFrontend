import React, { useState} from "react"
import { useSelector } from "react-redux"
import { Jumbotron } from "react-bootstrap"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"

import UserOrders from "../../components/UserOrders"
import { selectUser } from "../../store/User/selectors"

export default function ProfilePage(){
    const [FirstName, set_FirstName] = useState("")
    const [LastName, set_LastName] = useState("")
    const [Email, set_Email] = useState("")
    const [Phone, set_Phone] = useState("")
    const [Address, set_Address] = useState("")
    const [DateOfBirth, set_DateOfBirth] = useState("")
    const user = useSelector(selectUser)
    console.log("user test", user)

    const fullName = `${user.firstName} ${user.lastName}`

    function onSubmit(event){
        event.preventDefault()
    }

    return (
        <div>
            <Jumbotron>
                {fullName}
            </Jumbotron>
            <Container>
                <Form s={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">
                    User Data:
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
                        variant="info"
                        type="submit"
                        onClick={onSubmit}>
                        Make Adjustments!
                    </Button>
                </Form.Group>
                </Form>
            </Container>
            <UserOrders data={user}/>
        </div>
    )
}