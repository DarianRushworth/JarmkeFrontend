import React, { useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { getProducts } from "../../store/Products/actions"
import { selectProducts } from "../../store/Products/selectors"
import "./index.css"

export default function ProductTable(){
    const dispatch = useDispatch()
    const products = useSelector(selectProducts)
    // console.log("products in state test", products)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

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
                                            Description: {product.description}
                                            </div>
                                            <div>
                                            Price(€): {product.price}
                                            </div>
                                            <div>
                                                <Button>
                                                    Buy Me!
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