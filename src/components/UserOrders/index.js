import React from "react"
import { Table } from "react-bootstrap"


export default function UserOrders(props){
    const user = props.data
    // console.log("user test for orders", user)

    const displayOrders = user.orders.map(order => {
        const colorPicker = order.completed
                            ? {
                                textAlign: "center",
                                color: "green"
                            }
                            : {
                                textAlign: "center",
                                color: "red"
                            }
        return (
            <tr>
                <td style={colorPicker}>
                    {order.total}
                </td>
                <td style={colorPicker}>
                    {JSON.stringify(order.expressShipping)}
                </td>
                <td style={colorPicker}>
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