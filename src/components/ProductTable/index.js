import React, { useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"


import { getProducts } from "../../store/Products/actions"
import { selectProducts } from "../../store/Products/selectors"
import "./index.css"

export default function ProductTable(){
    const history = useHistory()
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    // console.log("products in state test", products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    function redirect(event){
        history.push(`/moreDetails/${event.target.value}`)
        // console.log("value for id test", event.target.value)
    }

    function getMoreProducts(){
        dispatch(getProducts())
    }

    const displayProducts = products.length <= 2
                            ? products.map(product => {
                                return (
                                    <tr key={product.id}>
                                        <td>
                                            <img 
                                                src={product.image} 
                                                alt="product"
                                                />
                                        </td>
                                        <td>
                                            <div>
                                                Title: {product.title}
                                            </div>
                                            <div>
                                            Price(€): {product.price}
                                            </div>
                                            <div>
                                                <Button 
                                                onClick={redirect}
                                                value={product.id}>
                                                    Check Me Out!
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                            : "Loading Products..."
    return(
        <div>
            <Table>
                <thead 
                style={{
                    textAlign: "center"
                }}>
                    <tr>
                        <th>
                            <strong>Products</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayProducts}
                </tbody>
            </Table>
            <div style={{
                textAlign: "center"
            }}>
                <button
                 onClick={getMoreProducts}>
                    Load More!
                </button>
            </div>
        </div>
    )
}