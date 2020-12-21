import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Col, Row, Image } from "react-bootstrap"
import { useHistory } from "react-router"

import { getFavorites } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"
import LoadingSpinner from "../LoadingSpinner"
import "./index.css"

export default function UsersFavorites(){
    const dispatch = useDispatch()
    const history = useHistory()
    const favorites = useSelector(selectFavorites)
    // console.log("favorites out of state", favorites)


    const displayFavorites = favorites.length >= 2
                            ? favorites.map(favorite => {
                                return (
                                        <Col 
                                            key={favorite.id}
                                            className="fav_prod">
                                            <Image
                                            roundedCircle
                                            src={favorite.image}
                                            alt="product"
                                            style={{
                                                width: 171,
                                                height: 180,
                                            }}
                                            onClick={() => history.push(`/moreDetails/${favorite.id}`)} />
                                        </Col>
                                )
                            })
                            : <LoadingSpinner />

                            
    useEffect(() => {
        if(favorites.length === 0){
            dispatch(getFavorites())
        }
    }, [dispatch, favorites.length, favorites.id])

    return (
        <div>
            <Container fluid>
                <div className="fav_row_1">
                <Row className="fav_row_2">
                    <h1 style={{
                        fontFamily: "cursive",
                    }}>
                        User Favorites:
                    </h1>
                </Row>
                <Row className="fav_row_2">
                        <p
                        style={{
                            color: "white",
                        }}>
                            (Click an image to see further details)
                        </p>
                </Row>
                <Row>
                    {displayFavorites}
                </Row>
                </div>
            </Container>
        </div>
    )
}