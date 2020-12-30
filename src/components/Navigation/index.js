import React from "react";
import { useSelector, useDispatch } from "react-redux"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import NavBarItem from "./NavBarItem"
import { selectUser, selectToken } from "../../store/User/selectors"
import { removeUser } from "../../store/User/actions"
import { Button, Image } from "react-bootstrap";

export default function Navigation() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const tokenNeeded = useSelector(selectToken)

    const welcomeMessage = user === undefined
    ? "Error"
    :`Welcome ${user.firstName} ${user.lastName}`
    // console.log(user.orders)


    const amountOfOrders = () => {
        if(user.orders === undefined){
            return 0
        }
        const orderThere = user.orders.find(order => {
            return order.completed === false
       })
        const amountToDisplay = orderThere                
                            ? orderThere.productAmount
                            : 0
        return amountToDisplay
    }

    const navDisplay = tokenNeeded
        ? <>
          <NavBarItem path="/profilePage" linkText={welcomeMessage} />
          <NavBarItem path="/cartCheckout" linkText={`🛒${amountOfOrders()}`} />
          <Button onClick={() => dispatch(removeUser())}>Logout</Button>
          </>
        : <NavBarItem path="/login" linkText="Login" />


    // console.log("user test", user)
    return (
        <Navbar bg="dark"  variant={{
            color: "white"
        }} expand="lg">
            <Navbar.Brand as={NavLink} to="/">
                <Image 
                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597914048/LogoEdit_jsikpf.jpg"
                    roundedCircle
                    style={{
                        width: 60,
                        height: 60,
                    }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav style={{ 
                    width: "100%"}} fill>
                    <NavBarItem path="/productsPage" linkText="Store" />
                    {navDisplay}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}