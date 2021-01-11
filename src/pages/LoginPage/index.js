import React, { useState } from "react"
import {
    Form,
    Container,
    Button,
    Col,
    Modal
} from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import "./index.css";

import { getUser } from "../../store/User/actions"
import { selectSpinner } from "../../store/User/selectors"
import LoadingSpinner from "../../components/LoadingSpinner"

const message =
    `jarmké
jewellery`

export default function LoginPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const loader = useSelector(selectSpinner)
    const [loading, setLoading] = useState(false)
    const [email, set_Email] = useState("")
    const [password, set_Password] = useState("")
    const [display, set_Display] = useState(false)

    function onSubmit(event) {
        event.preventDefault()

        setLoading(true)

        if (email === "" || password === "") {
            set_Display(true)
        } else {
            dispatch(getUser(email, password))

            set_Email("")
            set_Password("")
        }
    }

    function exit() {
        set_Display(false)
    }

    if(!loading){
        return (
            <div className="main_container">
                <Modal
                    show={display}
                    onHide={exit}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Oops, Email/Password wasn't read!?!
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Please carefully retype your email and password.
                        No room for errors. Please click close to exit message.
                </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="outline-info"
                            onClick={exit}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
                <div className="form_container">
                    <Container>
                        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                            <h1
                                style={{
                                    fontFamily: "Allura",
                                }}>
                                {message}
                            </h1>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label
                                    style={{
                                        fontFamily: "Allura",
                                        fontSize: 20,
                                        fontWeight: "bold"
                                    }}>
                                    Email:
                        </Form.Label>
                                <Form.Control
                                    value={email}
                                    onChange={(event) => set_Email(event.target.value)}
                                    type="email"
                                    placeholder="Enter email"
                                    required />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label
                                    style={{
                                        fontFamily: "Allura",
                                        fontSize: 20,
                                        fontWeight: "bold"
                                    }}>
                                    Password:
                        </Form.Label>
                                <Form.Control
                                    value={password}
                                    onChange={(event) => set_Password(event.target.value)}
                                    type="password"
                                    placeholder="Password"
                                    required />
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
            </div>
        )
    } else if(loading){

        if(!loader){
            history.push("/")
        }

        return (
            <div className="loader_container">
                <LoadingSpinner />
            </div>
        )
    }
}