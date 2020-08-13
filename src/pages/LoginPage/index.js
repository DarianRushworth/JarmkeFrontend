import React from "react"
import {
    Form,
    Container,
    Button
} from "react-bootstrap"
import { Link } from "react-router-dom"

export default function LoginPage(){
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
                        type="email"
                        placeholder="Enter email"
                        required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control 
                        type="password"
                        placeholder="Password"
                        required/>
                </Form.Group>
                <Form.Group className="mt-5">
                    <Button variant="primary" type="submit">
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