import axios from "axios"
import { apiUrl } from "../../config/constants"

import { setUser } from "../../store/User/actions"
import { useDispatch } from "react-redux"

function addOrderProduct(OrderData){
    return {
        type: "ADD_ORDER_PRODUCT",
        payload: OrderData
    }
}

function setOrderProducts(OrderData){
    return {
        type: "SET_ORDER_PRODUCTS",
        payload: OrderData
    }
}

export function getOrderedProducts(id){
    return async function thunk10(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            // console.log("do I get here")
            const cartProducts = await axios.get(`${apiUrl}/checkout/${id}`,{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("fetched cart test", cartProducts)

            dispatch(setOrderProducts(cartProducts.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function removeProduct(orderId, productId){
    return async function thunk11(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const getRidOf = await axios.delete(`${apiUrl}/checkout/${orderId}/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("action test", getRidOf)
            dispatch(setOrderProducts(getRidOf.data.notInCart))
            dispatch(setUser(getRidOf.data.user))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function addProduct(id){
    return async function thunk12(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const updatedOrder = await axios.post(`${apiUrl}/products/${id}/shoppingCart`, {},{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("updated Order test", updatedOrder)

            dispatch(addOrderProduct(updatedOrder.data.newIncart))
            dispatch(setUser(updatedOrder.data.user))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function addShipping(shipping){
    return async function thunk13(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const shippingUpdated = await axios.patch(`${apiUrl}/checkout/updateCart`,{
                expressShipping: shipping
            },{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("update went well", shippingUpdated)

            dispatch(setUser(shippingUpdated.data.user))
            dispatch(addOrderProduct(shippingUpdated.data.order))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function addShippingAddress(address){
    return async function thunk14(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const updateAddress = await axios.patch(`${apiUrl}/updateAddress`,{
                shippingAddress: address
            },{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("update happened", updateAddress)
            dispatch(setOrderProducts(updateAddress.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function addPayment(total, moneyValue){
    return async function thunk15(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const clientSecret = await axios.post(`${apiUrl}/payment`,{
                amount: total,
                currency: moneyValue,
            },{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("payment test", clientSecret)

        } catch(error){
            console.log(error.message)
        }
    }
}