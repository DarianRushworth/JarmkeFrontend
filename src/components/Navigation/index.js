import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { useHistory } from "react-router"

import { selectUser, selectToken } from "../../store/User/selectors"
import { removeUser } from "../../store/User/actions"
import { Button, Image, Jumbotron } from "react-bootstrap";
import "./index.css"

const navImages = [
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761569/IMG-1796_m8rmvr.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597845845/IMG_5539_qpvufa.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597769832/IMG-6327_ssonf4.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597761978/IMG-1292_zrtuom.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597845473/IMG_5481_etie1o.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597827679/IMG-6987_bjm8x8.jpg",
    "https://res.cloudinary.com/djzjepmnr/image/upload/v1597766391/Kristina_Matthews_Extra_Lifestyle_smaller_wcusal.jpg",
]

export default function Navigation() {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const tokenNeeded = useSelector(selectToken)

    const fullName = user === undefined
    ? "Error"
    :`${user.firstName} ${user.lastName}`
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

    // <div className="welcome">
    //     <Link to="/profilePage" className="link_custom">{welcomeMessage}</Link>
    // </div>
    // <div className="cart">
    //     <Link to="/cartCheckout" className="link_custom">{`${amountOfOrders()} 🛒`}</Link>
    // </div>

    const navDisplay = tokenNeeded
        ? <div className="links_right_in">
            <div className="nav_profile">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => history.push("/profilePage")}>
                    {fullName}
                </Button>
            </div>
            <div className="nav_products">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => history.push("/productsPage")}>
                    Store
                </Button>
            </div>
                <Button
                        variant="info"
                        size="sm"
                        onClick={() => history.push("/cartCheckout")}>
                        {`${amountOfOrders()} 🛒`}
                    </Button>
                <div className="nav_out">
                    <Button
                        variant="info"
                        size="sm" 
                        onClick={() => dispatch(removeUser())}
                    >Logout</Button>
                </div>
          </div>
        : <div className="links_right_out">
            <div className="nav_out">
                <Button
                    variant="info"
                    size="sm"
                    onClick={() => history.push("/login")}
                >Login</Button>
            </div>
        </div>

    const randomNum = Math.floor(Math.random() * 7)
    const neededUrl = navImages[randomNum]
    // console.log("user test", user)

    return (
        <div>
            <Jumbotron
                className="JumboImage"
                style={{
                    backgroundImage: `url(${neededUrl})`,
                    height: 170,
                }}
            >
            <div className="nav_logo">
                <Image 
                    src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597914048/LogoEdit_jsikpf.jpg"
                    roundedCircle
                    style={{
                        width: 80,
                        height: 80,
                    }}
                    onClick={() => history.push("/")}
                />
            </div>
                {navDisplay}
            </Jumbotron>
        </div>
    )
}