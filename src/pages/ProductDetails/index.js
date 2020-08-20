import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Button, Jumbotron, Container, Col, Image, Row } from "react-bootstrap"

import HeartButton from "../../components/HeartButton"
import { getSpecificProduct } from "../../store/Products/actions"
import { selectProduct } from "../../store/Products/selectors"
import { addProduct } from "../../store/Order/actions"
import "./index.css"

const jumboUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597769832/IMG-6327_ssonf4.jpg"

export default function ProductDetails(){
    const dispatch = useDispatch()
    const product = useSelector(selectProduct)
    // console.log("product test", product)
    const idNeeded = parseInt(useParams().id)
    // console.log("params test", idNeeded)


    useEffect(() => {
        dispatch(getSpecificProduct(idNeeded))
    }, [dispatch, idNeeded])
    
    function addToCart(id){
        dispatch(addProduct(id))
    }

    
    return (
        <div>
            <Jumbotron
                className="JumboImage"
                style={{
                    backgroundImage: `url(${jumboUrl})`,
                    height: 200,
                }}>
            </Jumbotron>
            <Container>
                <Row>
                    <Col md={{span:3, offset: 3}}>
                    <div 
                        key={product.id}
                        className="card"
                        style={{
                        width: "21rem"
                    }}>
                        <Image 
                            className="card-img-top"
                            src={product.image}
                            alt=""/>
                            <div className="card-body">
                                <h5 className="card-title"
                                    style={{
                                        textAlign: "right"
                                    }}>
                                    {product.title}
                                    <div style={{
                                        textAlign: "left"
                                    }}>
                                        <HeartButton data={product} />
                                    </div>
                                </h5>
                                <p className="card-text">
                                    {product.description}
                                </p>
                            </div>
                            <div className="card-body"> 
                                <p className="card-p">
                                    Units in Stock : {product.unitsInStock}
                                </p>
                            </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{product.metal}</li>
                                    <li className="list-group-item">€{product.price}</li>
                                </ul>
                                <div className="card-body">
                                    <Button
                                        value={product.id}
                                        variant="info"
                                        onClick={(event) => addToCart(
                                            parseInt(event.target.value))}>
                                            Add To Cart
                                    </Button>
                                </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
                                        