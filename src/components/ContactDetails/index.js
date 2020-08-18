import React, { useEffect } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"

import { getOwnerDetails } from "../../store/Owner/actions"
import { selectOwner } from "../../store/Owner/selectors"

export default function ContactDetails(){
    const dispatch = useDispatch()
    const owner = useSelector(selectOwner)
    // console.log("owner test(selector)", owner)

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
                            {owner.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone:
                        </td>
                        <td>
                            +{owner.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="https://www.instagram.com/_jarmke/">
                                <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6EGPAjV4cLjO4uE5FjAIBvTcyWONzY-wAXw&usqp=CAU"
                                alt=""
                                style={{
                                    width: 30,
                                    height: 30,
                                }} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}