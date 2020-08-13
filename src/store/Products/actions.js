import axios from "axios"
import { apiUrl } from "../../config/constants"

function setProductDetails(product){
    return {
        type: "SET_PRODUCT_DETAILS",
        payload: product
    }
}

function setProducts(products){
    return {
        type: "SET_PRODUCTS",
        payload: products
    }
}

export function getProducts(){
    return async function thunk2(dispatch, getState){
        const productLength = getState().products.length
        // console.log("state length test", productLength)
        try{
            const productsFound = await axios.get(`${apiUrl}/products?offset=${productLength}&limit=6`)
            // console.log("response test", productsFound)
            
            dispatch(setProducts(productsFound.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function getSpecificProduct(id){
    return async function thunk5(dispatch, getState){
        try{
            const product = await axios.get(`${apiUrl}/products/${id}`)
            console.log("product test", product)

            dispatch(setProductDetails(product.data))

        } catch(error){
            console.log(error.message)
        }
    }
}