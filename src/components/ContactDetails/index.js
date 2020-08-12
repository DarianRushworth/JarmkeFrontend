import React from "react"
import { Table } from "react-bootstrap"

export default function ContactDetails(){
    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>
                            <strong>Contact Deatils</strong>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>
                            Email goes here
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone:
                        </td>
                        <td>
                            Phone goes here
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Instagram:
                        </td>
                        <td>
                            Try link Instagram here
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}