import React, { useState } from "react"
import { Table, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { removeProduct } from "../../store/Order/actions"
import { selectUser } from "../../store/User/selectors"

export default function ProductsOrdered(props){
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log("user test cart", user)
    const orderData = props.data
    console.log("props test", orderData)

    function onDelete(event){
        const productId = parseInt(event.target.value)
        console.log("event test", productId)
        dispatch(removeProduct(orderData.id, productId, user.token))
    }

    const displayOrder = orderData.id >= 1
                        ? orderData.products.map(product => {
                            return (
                                <td>
                                <div key={product.id}
                                    className="card"
                                    style={{
                                        width: "18rem"
                                    }}>
                                    <img
                                    className="car-img-top" 
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
                                        <li className="list-group-item">{product.metal}</li>
                                        <li className="list-group-item">€{product.price}</li>
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
                                </td>
                            )
                        })
                        : "Loading Products..."
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Products Ordered
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {displayOrder}
                    </tr>
                </tbody>
            </Table>
        </div>
    )
} 