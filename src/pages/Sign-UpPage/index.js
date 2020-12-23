import React, { useState } from "react"
import {
    Form,
    Container,
    Button,
    Col,
    Jumbotron
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"

import { newUser } from "../../store/User/actions"
import { selectError } from "../../store/User/selectors"
import Errors from "../../components/Errors"
import "./index.css"

const jumboIamge = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597845473/IMG_5481_etie1o.jpg"

export default function SignUpPage(){
    const dispatch = useDispatch()
    const history = useHistory()
    const errorRecieved = useSelector(selectError)
    const errorMessage = errorRecieved.data
    const [firstName, set_FirstName] = useState("")
    const [lastName, set_LastName] = useState("")
    const [email, set_Email] = useState("")
    const [phone, set_Phone] = useState("")
    const [address, set_Address] = useState("")
    const [dateOfBirth, set_DateOfBirth] = useState("")
    const [password, set_Password] = useState("")

    function onSubmit(event){
        event.preventDefault()
        // console.log("first Name:", firstName)
        // console.log("last Name:", lastName)
        // console.log("email:", email)
        // console.log("phone:", phone)
        // console.log("address:", address)
        // console.log("DOB:", dateOfBirth)
        // console.log("password:", password)

        dispatch(newUser(
            firstName,
            lastName,
            email,
            phone,
            address,
            dateOfBirth,
            password
        ))

        set_FirstName("")
        set_LastName("")
        set_Email("")
        set_Phone("")
        set_Address("")
        set_DateOfBirth("")
        set_Password("")
    }

    const displayError = () => {
        if(errorMessage){
            return <Errors error={errorMessage} />
        }
    }

    return(
        <div>
        <Jumbotron style={
            {
                backgroundImage: `url(${jumboIamge})`,
                height: 250,
            }
        }   className="JumboImage">

        </Jumbotron>
        {displayError()}
        <div className="form_container_2">
        <Container>
            <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                <h1 className="title_sign_up">
                    jarmké jewellery
                </h1>
                <Form.Row>
                <Form.Group as={Col} controlId="formBasicFirstName">
                    <Form.Label className="label_form">
                        First Name:
                    </Form.Label>
                    <Form.Control 
                        value={firstName}
                        onChange={(event) => set_FirstName(event.target.value)}
                        type="input"
                        placeholder="First Name Here"
                        required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicLastName">
                    <Form.Label className="label_form">
                        Last Name:
                    </Form.Label>
                    <Form.Control 
                        value={lastName}
                        onChange={(event) => set_LastName(event.target.value)}
                        type="input"
                        placeholder="Last Name Here"
                        required/>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="formBasicEmail">
                    <Form.Label className="label_form">
                        Email:
                    </Form.Label>
                    <Form.Control 
                        value={email}
                        onChange={(event) => set_Email(event.target.value)}
                        type="email"
                        placeholder= "Email Here"
                        required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPhone">
                    <Form.Label className="label_form">
                        Phone (with country code):
                    </Form.Label>
                    <Form.Control 
                        value={phone}
                        onChange={(event) => set_Phone(parseInt(event.target.value))}
                        type="input"
                        placeholder="Phone Number Here"
                        required/>
                </Form.Group>
                </Form.Row>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label className="label_form">
                        Postal Address:
                    </Form.Label>
                    <Form.Control 
                        value={address}
                        onChange={(event) => set_Address(event.target.value)}
                        type="input"
                        placeholder="Postal Address Here"
                        required/>
                </Form.Group>

                <Form.Row>
                <Form.Group as={Col} controlId="formBasicDateOfBirth">
                    <Form.Label className="label_form">
                        Date Of Birth:
                    </Form.Label>
                    <Form.Control 
                        value={dateOfBirth}
                        onChange={(event) => set_DateOfBirth(event.target.value)}
                        type="date"
                        placeholder="DOB Here"
                        required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formBasicPassword">
                    <Form.Label className="label_form">
                        Password:
                    </Form.Label>
                    <Form.Control 
                        value={password}
                        onChange={(event) => set_Password(event.target.value)}
                        type="password"
                        placeholder="Password Here"
                        required/>
                </Form.Group>
                </Form.Row>

                <Form.Group className="button_form">
                    <Button
                        variant="info"
                        type="submit"
                        onClick={onSubmit}>
                        Sign Me Up!
                    </Button>
                </Form.Group>
            </Form>
        </Container>
        </div>
        </div>
    )
}