import React, { useEffect } from "react"
import { Button, Container, Image, Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"


import { getProducts } from "../../store/Products/actions"
import { getMoreProducts } from "../../store/Products/actions"
import { selectProducts } from "../../store/Products/selectors"
import { selectUser } from "../../store/User/selectors"
import ContactDetails from "../ContactDetails/index"
import LoadingSpinner from "../LoadingSpinner"
import "./index.css"

export default function ProductTable() {
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    // console.log("products in state test", products)
    const user = useSelector(selectUser)
    // console.log("user test", user)


    useEffect(() => {
        if (products.length === 0) {
            dispatch(getProducts())
        }

    }, [dispatch, products.length])

    function redirect(event) {
        const whereTo = user.id > 0
            ? history.push(`/moreDetails/${event.target.value}`)
            : history.push(`/signup`)
        return whereTo
    }

    const MoreProducts = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom) { 
            dispatch(getMoreProducts())
        }
    }

    if( products.length === 0){
        return (
            <div className="loader_container"><LoadingSpinner /></div>
        )
    }

    const displayProducts = products.map(product => {
            return (
                <Col
                    key={product.id}
                    style={{
                        paddingTop: 10,
                    }}>
                    <div
                        className="card"
                        style={{
                            width: "18rem",
                            backgroundColor: "#c5d5cb",
                        }}>
                        <Image
                            className="card-img-top"
                            src={product.image}
                            alt="" />
                        <div className="card-body">
                            <h6 className="card-title"
                                style={{
                                    fontFamily: "Allura",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                }}>
                                {product.title}
                            </h6>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"
                                style={{
                                    backgroundColor: "#c3ccd4",
                                    fontFamily: "Allura",
                                    fontWeight: "bold",
                                }}>{product.metal}</li>
                            <li className="list-group-item"
                                style={{
                                    backgroundColor: "#c3ccd4"
                                }}>€{product.price}.00</li>
                        </ul>
                        <div className="card-body">
                            <Button
                                value={product.id}
                                variant="info"
                                onClick={redirect}>
                                View More
                                                    </Button>
                        </div>
                    </div>
                </Col>
            )
        })

    return (
        <div>
        <div onScroll={MoreProducts} style={{ overflowY: "scroll", maxHeight: "800px"}}>
            <Container>
                <Row>
                    {displayProducts}
                </Row>
            </Container>
        </div>
        <footer className="contact_footer">
        <ContactDetails />
        </footer>
        </div>
    )
}
