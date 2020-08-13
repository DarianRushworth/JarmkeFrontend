import React, { useState } from "react"
import {
    Form,
    Container,
    Button,
    Col
} from "react-bootstrap"
import { Link } from "react-router-dom"

export default function LoginPage(){
    const [email, set_Email] = useState("")
    const [password, set_Password] = useState("")

    function onSubmit(event){
        event.preventDefault()
        console.log("Email test:", email)
        console.log("Password test:", password)
    }

    return(
        <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="mt-5 mb-5">
                    Login
                </h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control
                        value={email} 
                        onChange={(event) => set_Email(event.target.value)}
                        type="email"
                        placeholder="Enter email"
                        required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control 

                        onChange={(event) => set_Password(event.target.value)}
                        type="password"
                        placeholder="Password"
                        required/>
                </Form.Group>
                <Form.Group className="mt-5">
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={onSubmit}>
                        Log Me In
                    </Button>
                </Form.Group>
                <Link>
                    Sign-up Here.
                </Link>
            </Form>
        </Container>
    )
}