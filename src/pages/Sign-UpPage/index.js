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
            <Form>
                <h1>
                    Sign Up!
                </h1>
                <Form.Group>
                    <Form.Label>
                        First Name:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Last Name:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Phone (with country code):
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Address:
                    </Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Date Of Birth:
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
                        Sign Me Up!
                    </Button>
                </Form.Group>
            </Form>
        </Container>
    )
}