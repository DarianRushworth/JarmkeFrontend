import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Table, Button } from "react-bootstrap"

import { getSpecificProduct } from "../../store/Products/actions"
import { selectProducts } from "../../store/Products/selectors"

export default function ProductDetails(){
    const dispatch = useDispatch()
    const product = useSelector(selectProducts)
    console.log("product test", product)
    const idNeeded = parseInt(useParams().id)
    // console.log("params test", idNeeded)


    useEffect(() => {
        dispatch(getSpecificProduct(idNeeded))
    }, [dispatch, idNeeded])

    const display = product.length === 1
                            ?   product.map(item => {
                                return (
                                    <Table key={item.id}>
                                        <thead
                                        style={{
                                            textAlign: "center"
                                        }}>
                                            <tr>
                                                <th>
                                                    <strong>{item.title}</strong>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <img
                                                    src={item.image}
                                                    alt="product"
                                                    />
                                                </td>
                                                <td>
                                                    <div>
                                                        Description:
                                                    </div>
                                                    <div>
                                                        {item.description}
                                                    </div>
                                                    <div>
                                                        Metal:
                                                    </div>
                                                    <div>
                                                        {item.metal}
                                                    </div>
                                                    <div>
                                                        Price:
                                                    </div>
                                                    <div>
                                                        {item.price}
                                                    </div>
                                                    <div>
                                                        Units in Stock:
                                                    </div>
                                                    <div>
                                                        {item.unitsInStock}
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    )
                                })
                                : "Loading..."
    return (
        <div>
            {display}
            <Button>
                Add to Cart!
            </Button>
        </div>
    )
}
                                        