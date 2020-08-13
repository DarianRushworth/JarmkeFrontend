import React from "react"
import { Table } from "react-bootstrap"

export default function UserOrders(props){
    const user = props.data
    console.log("user test for orders", user)

    const displayOrders = user.orders.map(order => {
        return (
            <tr>
                <td>
                    {order.total}
                </td>
                <td>
                    {JSON.stringify(order.expressShipping)}
                </td>
                <td>
                    {JSON.stringify(order.completed)}
                </td>
            </tr>
        )
    })

    return (
        <div>
            <Table>
            <thead 
                style={{
                    textAlign: "center"
                }}>
                    <tr>
                        <th>
                            <strong>Total</strong>
                        </th>
                        <th>
                            <strong>Express Shipping</strong>
                        </th>
                        <th>
                            <strong>Completed</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {displayOrders}
                </tbody>
            </Table>
        </div>
    )
}