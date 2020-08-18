import React, { useEffect } from "react"
import { Table, Button, Container, Image, Row, Col, Jumbotron } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"


import { getProducts } from "../../store/Products/actions"
import { getMoreProducts } from "../../store/Products/actions"
import { getFavorites } from "../../store/User/actions"
import { selectProducts } from "../../store/Products/selectors"
import { selectUser } from "../../store/User/selectors"
import "./index.css"

const imageUrl = "https://res.cloudinary.com/djzjepmnr/image/upload/v1597766391/Kristina_Matthews_Extra_Lifestyle_smaller_wcusal.jpg"

export default function ProductTable(){
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    // console.log("products in state test", products)
    const user = useSelector(selectUser)
    // console.log("user test", user)

    
    function renderOnce(){
        if(products.length === 0){
            dispatch(getProducts())
        }
    }
    useEffect(() => {
        renderOnce()
    }, [renderOnce])

    function redirect(event){

        if(user.id > 0){
            dispatch(getFavorites())
        }
        const whereTo = user.id > 0
                        ? history.push(`/moreDetails/${event.target.value}`)
                        : history.push(`/signup`)
        return whereTo
    }

    function MoreProducts(){
        dispatch(getMoreProducts())
    }

    const displayProducts = products.length >= 2
                            ? products.map(product => {
                                return (
                                    <Col>
                                        <div key={product.id}
                                        className="card"
                                        style={{
                                            width: "18rem"
                                        }}>
                                            <Image 
                                                className="card-img-top"
                                                src={product.image}
                                                alt=""/>
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {product.title}
                                                </h5>
                                            </div>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">{product.metal}</li>
                                                    <li className="list-group-item">€{product.price}</li>
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
                                )})
                            : "Loading Products..."
    return(
        <div>
        <Jumbotron
            className="JumboImage"
            style={{
                backgroundImage: `url(${imageUrl})`,
                height: 200,
            }}>
            <Image 
                src="https://res.cloudinary.com/djzjepmnr/image/upload/v1597761872/JarmkeBrandingFinal_fdlp0g.jpg"
                style={{
                    width: 200,
                    height: 100,
                }}/>
        </Jumbotron>
        <Container>
            <Row>
                {displayProducts}
            </Row>
            <Row>
                <Button
                    onClick={MoreProducts}>
                    Load More
                </Button>
            </Row>
        </Container>
        </div>
    )
}
