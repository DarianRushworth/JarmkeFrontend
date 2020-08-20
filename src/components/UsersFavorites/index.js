import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Container, Col, Row, Image } from "react-bootstrap"
import { useHistory } from "react-router"

import { getFavorites } from "../../store/User/actions"
import { selectFavorites } from "../../store/User/selectors"
import LoadingSpinner from "../LoadingSpinner"

export default function UsersFavorites(){
    const dispatch = useDispatch()
    const history = useHistory()
    const favorites = useSelector(selectFavorites)
    // console.log("favorites out of state", favorites)


    const displayFavorites = favorites.length >= 2
                            ? favorites.map(favorite => {
                                return (
                                        <Col key={favorite.id}>
                                            <Image
                                            rounded
                                            src={favorite.image}
                                            alt="product"
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
            <Container>
                <Row>
                    <h1>
                        User Favorites:
                    </h1>
                </Row>
                <Row>
                    {displayFavorites}
                </Row>
            </Container>
        </div>
    )
}