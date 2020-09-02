import axios from "axios"
import { apiUrl } from "../../config/constants"

function errorHandle(data){
    return {
        type: "ERROR_HANDLE",
        payload: data,
    }
}

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
        try{
            const productsFound = await axios.get(`https://jarmke-backend.herokuapp.com/products?offset=0&limit=6`)
            // console.log("response test", productsFound)
            
            dispatch(setProducts(productsFound.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function getMoreProducts(){
    return async function thunk5(dispatch, getState){
        const productLength = getState().products.allJewellery.length
        // console.log("length test", productLength)
        try{
            const moreProducts = await axios.get(`${apiUrl}/products?offset=${productLength}&limit=6`)

            dispatch(setProducts(moreProducts.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function getSpecificProduct(id){
    return async function thunk6(dispatch, getState){
        try{
            const product = await axios.get(`${apiUrl}/products/${id}`)
            // console.log("product test", product)

            dispatch(setProductDetails(product.data))

        } catch(error){
            if(error){
                dispatch(errorHandle(error.response))
            }
        }
    }
}