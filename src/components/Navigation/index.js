import React from "react";
import { useSelector } from "react-redux"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import NavBarItem from "./NavBarItem"
import { selectUser } from "../../store/User/selectors"

export default function Navigation() {
    const user = useSelector(selectUser)

    const welcomeMessage = `Welcome ${user.firstName} ${user.lastName}`

    const navDisplay = user.email
                        ? <NavBarItem path="/" linkText={welcomeMessage} />
                        : <Nav.Item>BeDazzle Yourself</Nav.Item>

    // console.log("user test", user)
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={NavLink} to="/">
                Jarmke
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ width: "100%" }} fill>
                    <NavBarItem path="/productsPage" linkText="Store" />
                    <NavBarItem path="/login" linkText="Login" />
                    {navDisplay}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}