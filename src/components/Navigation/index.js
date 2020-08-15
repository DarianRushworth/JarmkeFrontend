import React from "react";
import { useSelector } from "react-redux"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import NavBarItem from "./NavBarItem"
import { selectUser } from "../../store/User/selectors"

export default function Navigation() {
    const user = useSelector(selectUser)
    console.log("user nav test", user)

    const welcomeMessage = `Welcome ${user.firstName} ${user.lastName}`

    const amountOfOrders = () => {
        const orderThere = user.orders.find(order => {
            return order.completed === false
       })
        const amountToDisplay = orderThere                
                            ? orderThere.productAmount
                            : 0
        return amountToDisplay
    }

    const navDisplay = user.email
        ? <>
          <NavBarItem path="/profilePage" linkText={welcomeMessage} />
          <NavBarItem path="/cartCheckout" linkText={`🛒${amountOfOrders()}`} />
          </>
        : <NavBarItem path="/login" linkText="Login" />


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
                    {navDisplay}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}