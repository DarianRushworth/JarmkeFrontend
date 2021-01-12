import React from "react"
import {Button, Col, Container, Row } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

import { removeProduct } from "../../store/Order/actions"
import LoadingSpinner from "../LoadingSpinner"
import "./index.css"

export default function ProductsOrdered(props){
    const history = useHistory()
    const dispatch = useDispatch()
    const orderData = props.data

    if(orderData.products < 1){
        history.push("/")
    }

    function onDelete(event){
        const productId = parseInt(event.target.value)
        // console.log("event test", productId)
        dispatch(removeProduct(orderData.id, productId))
    }

    const displayOrder = orderData.id >= 1
                        ? orderData.products.map(product => {
                            return (
                                <Col className="order_col">
                                <div key={product.id}
                                    className="card"
                                    style={{
                                        width: "18rem"
                                    }}>
                                    <img
                                    className="card-img-top" 
                                    src={product.image}
                                    alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {product.title}
                                        </h5>
                                        <p className="card-text">
                                            {product.description}
                                        </p>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item" style={{ 
                                            backgroundColor: "#c3ccd4",
                                            fontFamily: "Allura",
                                            fontWeight: "bold",
                                            }}>
                                                {product.metal}</li>
                                        <li className="list-group-item" style={{ backgroundColor: "#c3ccd4"}}>€{product.price}</li>
                                    </ul>
                                    <div className="card-body">
                                        <Button
                                        value={product.id}
                                        variant="danger"
                                        onClick={(event) => onDelete(event)}
                                        >
                                            Discard
                                        </Button>
                                    </div>
                                </div>
                                </Col>
                            )
                        })
                        : <LoadingSpinner />
    return (
        <div>
            <Container fluid>
                <Row>
                    {displayOrder}
                </Row>
            </Container>
        </div>
    )
} 