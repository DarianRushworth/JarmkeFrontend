import React from "react"
import { Table } from "react-bootstrap"

export default function ProductTable(){
    return(
        <div>
            <Table>
                <thead 
                style={{
                    textAlign: "center"
                }}>
                    <tr>
                        <strong>Products</strong>
                    </tr>
                </thead>
                <tbody>
                    Products go here.
                </tbody>
            </Table>
        </div>
    )
}