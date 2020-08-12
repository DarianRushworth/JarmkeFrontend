import axios from "axios"
import { apiUrl } from "../../config/constants"

function setProducts(products){
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export function getProducts(){
    return async function thunk2(dispatch, getState){
        try{
            const productsFound = await axios.get(`${apiUrl}/products?offset=0&limit=6`)
            // console.log("response test", productsFound)

            dispatch(setProducts(productsFound.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}