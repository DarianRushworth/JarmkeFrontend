import axios from "axios"
import { apiUrl } from "../../config/constants"

function setOrderProducts(OrderData){
    return {
        type: "SET_ORDER_PRODUCTS",
        payload: OrderData
    }
}

export function getOrderedProducts(id, token){
    return async function thunk10(dispatch, getState){
        try{
            console.log("do I get here")
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