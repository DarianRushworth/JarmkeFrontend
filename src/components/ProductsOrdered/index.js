import React from "react"
import { Table, Button, InputGroup, FormControl, Col } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"

import { removeProduct } from "../../store/Order/actions"

export default function ProductsOrdered(props){
    const history = useHistory()
    const dispatch = useDispatch()
    const orderData = props.data
    // console.log("props test", orderData)

    if(orderData.products < 1){
        history.push("/")
    }

    function onDelete(event){
        const productId = parseInt(event.target.value)
        // console.log("event test", productId)
        dispatch(removeProduct(orderData.id, productId))
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
                                    className="card-img-top" 
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
                        : "Loading..."
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
            <div>
                <InputGroup as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                                €
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                    aria-label="Total of Products(in Euros)"
                    placeholder={orderData.total}
                    disabled />
                    <InputGroup.Append>
                        <InputGroup.Text>
                            .00
                        </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    )
} 