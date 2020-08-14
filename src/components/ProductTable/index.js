import React, { useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"


import { getProducts } from "../../store/Products/actions"
import { getMoreProducts } from "../../store/Products/actions"
import { selectProducts } from "../../store/Products/selectors"
import { selectUser } from "../../store/User/selectors"
import "./index.css"

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
                 onClick={MoreProducts}>
                    Load More!
                </button>
            </div>
        </div>
    )
}