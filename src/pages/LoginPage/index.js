import React, { useState } from "react"
import {
    Form,
    Container,
    Button,
    Col,
    Jumbotron
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

import { getUser } from "../../store/User/actions"

const jumboImage = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597845845/IMG_5539_qpvufa.jpg"

export default function LoginPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    const [email, set_Email] = useState("")
    const [password, set_Password] = useState("")

    function onSubmit(event){
        event.preventDefault()
        // console.log("Email test:", email)
        // console.log("Password test:", password)

        dispatch(getUser(email, password))

        history.push("/")

        set_Email("")
        set_Password("")

    }

    return(
        <div>
        <Jumbotron style={
            {
                backgroundImage: `url(${jumboImage})`,
                height: 250,
            }
        }   className="JumboImage">

        </Jumbotron>
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
                        value={password}
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
                <Link to="/signup">
                    Sign-up Here.
                </Link>
            </Form>
        </Container>
        </div>
    )
}