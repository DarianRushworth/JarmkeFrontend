import React, { useState } from "react"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"

export default function SignUpPage(){
    const [firstName, set_FirstName] = useState("")
    const [lastName, set_LastName] = useState("")
    const [email, set_Email] = useState("")
    const [phone, set_Phone] = useState("")
    const [address, set_Address] = useState("")
    const [dateOfBirth, set_DateOfBirth] = useState("")
    const [password, set_Password] = useState("")

    function onSubmit(event){
        event.preventDefault()
        console.log("first Name:", firstName)
        console.log("last Name:", lastName)
        console.log("email:", email)
        console.log("phone:", phone)
        console.log("address:", address)
        console.log("DOB:", dateOfBirth)
        console.log("password:", password)
    }

    return(
        <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">
                    Sign Up!
                </h1>
                <Form.Group controlId="formBasicFirstName">
                    <Form.Label>
                        First Name:
                    </Form.Label>
                    <Form.Control 
                        value={firstName}
                        onChange={(event) => set_FirstName(event.target.value)}
                        type="input"
                        placeholder="First Name Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>
                        Last Name:
                    </Form.Label>
                    <Form.Control 
                        value={lastName}
                        onChange={(event) => set_LastName(event.target.value)}
                        type="input"
                        placeholder="Last Name Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control 
                        value={email}
                        onChange={(event) => set_Email(event.target.value)}
                        type="email"
                        placeholder= "Email Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>
                        Phone (with country code):
                    </Form.Label>
                    <Form.Control 
                        value={phone}
                        onChange={(event) => set_Phone(parseInt(event.target.value))}
                        type="input"
                        placeholder="Phone Number Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>
                        Postal Address:
                    </Form.Label>
                    <Form.Control 
                        value={address}
                        onChange={(event) => set_Address(event.target.value)}
                        type="input"
                        placeholder="Postal Address Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicDateOfBirth">
                    <Form.Label>
                        Date Of Birth:
                    </Form.Label>
                    <Form.Control 
                        value={dateOfBirth}
                        onChange={(event) => set_DateOfBirth(event.target.value)}
                        type="date"
                        placeholder="DOB Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control 
                        value={password}
                        onChange={(event) => set_Password(event.target.value)}
                        type="password"
                        placeholder="Password Here"
                        required/>
                </Form.Group>
                <Form.Group>
                    <Button
                        variant="info"
                        type="submit"
                        onClick={onSubmit}>
                        Sign Me Up!
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}