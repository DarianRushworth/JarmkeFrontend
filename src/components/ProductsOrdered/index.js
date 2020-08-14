import React from "react"
import { Table } from "react-bootstrap"

export default function ProductsOrdered(props){
    const orderData = props.data
    console.log("props test", orderData)

    const displayOrder = orderData.id >= 1
                        ? orderData.products.map(product => {
                            return (
                                <td>
                                <div 
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
                                        <li className="list-group-item">{product.price}</li>
                                    </ul>
                                    <div className="card-body">
                                        <p>
                                            Button to Delete
                                        </p>
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