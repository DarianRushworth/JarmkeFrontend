import React, { useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { getOwnerDetails } from "../../store/Owner/actions"
import { selectOwner } from "../../store/Owner/selectors"

export default function ContactDetails(){
    const dispatch = useDispatch()
    const owner = useSelector(selectOwner)
    console.log("owner test(selector)", owner)

    useEffect(() => {
        
        dispatch(getOwnerDetails())
    }, [dispatch])
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