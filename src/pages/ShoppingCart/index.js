import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"

import ProductsOrdered from "../../components/ProductsOrdered"
import { selectOrderData } from "../../store/Order/selectors"
import { getOrderedProducts } from "../../store/Order/actions"
import { selectUser } from "../../store/User/selectors"
import { Button } from "react-bootstrap"
import "./index.css"

export default function ShoppingCart(){
    const dispatch = useDispatch()
    const history = useHistory()
    const orderData = useSelector(selectOrderData)
    const user = useSelector(selectUser)

    if(!user){
        history.push("/")
    }

    const order = user.orders.find(order => order.completed === false)
    
    if(!order || order === undefined){
        history.push("/productsPage")
    }

    useEffect(() => {
        dispatch(getOrderedProducts(order.id))
    }, [dispatch, order.id])

    return (
        <div>
            <ProductsOrdered data={orderData}/>
            <div className="button_checkout">
                <Button
                    variant="info"
                    className="button"
                    onClick={() => history.push("/purchase")}
                >Proceed To Checkout</Button>
            </div>
        </div>
    )
}