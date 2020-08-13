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
            <Form>
                <h1>
                    Login
                </h1>
                <Form.Group>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Button>
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