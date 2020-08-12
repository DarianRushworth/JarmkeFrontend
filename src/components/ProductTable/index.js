import React, { useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch } from "react-redux"

import { getProducts } from "../../store/Products/actions"

export default function ProductTable(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
    })
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