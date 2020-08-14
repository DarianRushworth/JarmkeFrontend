import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Table, Button } from "react-bootstrap"

import HeartButton from "../../components/HeartButton"
import { getSpecificProduct } from "../../store/Products/actions"
import { selectProduct } from "../../store/Products/selectors"
import { addProduct } from "../../store/Order/actions"
import { selectUser } from "../../store/User/selectors"

export default function ProductDetails(){
    const dispatch = useDispatch()
    const product = useSelector(selectProduct)
    // console.log("product test", product)
    const user = useSelector(selectUser)
    // console.log("user test", user)
    const idNeeded = parseInt(useParams().id)
    // console.log("params test", idNeeded)


    useEffect(() => {
        dispatch(getSpecificProduct(idNeeded))
    }, [dispatch, idNeeded])
    
    function addToCart(id, token){
        dispatch(addProduct(id, token))
    }

    const display = product.id
                        ?  <Table>
                                <thead
                                style={{
                                    textAlign: "center"
                                }}>
                                    <tr>
                                        <th>
                                            <strong>{product.title}</strong>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img
                                            src={product.image}
                                            alt="product"
                                            />
                                        </td>
                                        <td>
                                            <div>
                                                Description:
                                            </div>
                                            <div>
                                                {product.description}
                                            </div>
                                            <div>
                                                Metal:
                                            </div>
                                            <div>
                                                {product.metal}
                                            </div>
                                            <div>
                                                Price:
                                            </div>
                                            <div>
                                                {product.price}
                                            </div>
                                            <div>
                                                Units in Stock:
                                            </div>
                                            <div>
                                                {product.unitsInStock}
                                            </div>
                                            <div>
                                                <Button
                                                value={product.id}
                                                onClick={(event) => addToCart(
                                                    parseInt(event.target.value), user.token)}>
                                                    Add to Cart!
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        : "Loading..."
    return (
        <div>
            {display}
            <HeartButton data={product}/>
        </div>
    )
}
                                        