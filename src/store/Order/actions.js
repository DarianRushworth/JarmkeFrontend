import axios from "axios"
import { apiUrl } from "../../config/constants"

import { setUser } from "../../store/User/actions"

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

export function getOrderedProducts(id, token){
    return async function thunk10(dispatch, getState){
        try{
            // console.log("do I get here")
            const cartProducts = await axios.get(`${apiUrl}/checkout/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("fetched cart test", cartProducts)

            dispatch(setOrderProducts(cartProducts.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function removeProduct(orderId, productId, token){
    return async function thunk11(dispatch, getState){
        try{
            const getRidOf = await axios.delete(`${apiUrl}/checkout/${orderId}/product/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
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

export function addProduct(id, token){
    return async function thunk12(dispatch, getState){
        try{
            const updatedOrder = await axios.post(`${apiUrl}/products/${id}/shoppingCart`, {},{
                headers: {
                    Authorization: `Bearer ${token}`
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

export function addShipping(token, shipping){
    return async function thunk13(dispatch, getState){
        try{
            const shippingUpdated = await axios.patch(`${apiUrl}/checkout/updateCart`,{
                expressShipping: shipping
            },{
                headers: {
                    Authorization: `Bearer ${token}`
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

export function addShippingAddress(token, address){
    return async function thunk14(dispatch, getState){
        try{
            const updateAddress = await axios.patch(`${apiUrl}/updateAddress`,{
                shippingAddress: address
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log("update happened", updateAddress)

        } catch(error){
            console.log(error.message)
        }
    }
}