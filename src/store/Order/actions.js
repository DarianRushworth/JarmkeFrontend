import axios from "axios"
import { apiUrl } from "../../config/constants"

import { setUser } from "../../store/User/actions"

export function addOrderProduct(OrderData){
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

function setSecret(secret){
    return {
        type: "SET_SECRET",
        payload: secret,
    }
}

function setCountries(countries, cities){
    return {
        type: "SET_COUNTRIES",
        payload: {
            country: countries,
            city: cities,
        }
    }
}

export function getCountries(){
    return async function thunk17(dispatch, getState){
        try{
            const apiCountry = await axios.get("https://restcountries.eu/rest/v2/all")

            const apiCity = await axios.get("https://countriesnow.space/api/v0.1/countries/population/cities")
            console.log("api", apiCity)

            dispatch(setCountries(apiCountry.data, apiCity.data.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function getSecretKey(total){
    return async function thunk16(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            console.log("here man")
            const stripeResponse = await axios.post(`${apiUrl}/payment`, {
                amount: total * 100,
                currency: "eur",
            }, {
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            console.log("response man", stripeResponse)

            dispatch(setSecret(stripeResponse.data.client_secret))

        } catch(error){
            console.log("error:", error.message)
        }
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
            // console.log("fetched cart test", cartProducts)

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
            // console.log("action test", getRidOf)
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
            // console.log("updated Order test", updatedOrder)

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
            console.log("shipping:", false)
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
            // console.log("update happened", updateAddress)
            dispatch(setOrderProducts(updateAddress.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function addPayment(total){
    return async function thunk15(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const userOrder = await axios.patch(`${apiUrl}/payment`,{
                amount: total
            },{
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            // console.log("updated order test", userOrder)
            dispatch(setUser(userOrder.data))

        } catch(error){
            console.log(error.message)
        }
    }
}