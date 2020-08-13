import React from "react"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"

export default function SignUpPage(){
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
                        type="input"
                        placeholder="First Name Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicLastName">
                    <Form.Label>
                        Last Name:
                    </Form.Label>
                    <Form.Control 
                        type="input"
                        placeholder="Last Name Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control 
                        type="email"
                        placeholder= "Email Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicPhone">
                    <Form.Label>
                        Phone (with country code):
                    </Form.Label>
                    <Form.Control 
                        type="tel"
                        placeholder="Phone Number Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicAddress">
                    <Form.Label>
                        Postal Address:
                    </Form.Label>
                    <Form.Control 
                        type="input"
                        placeholder="Postal Address Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicDateOfBirth">
                    <Form.Label>
                        Date Of Birth:
                    </Form.Label>
                    <Form.Control 
                        type="date"
                        placeholder="DOB Here"
                        required/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password Here"
                        required/>
                </Form.Group>
                <Form.Group>
                    <Button
                        variant="info"
                        type="submit">
                        Sign Me Up!
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}