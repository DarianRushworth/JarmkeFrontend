import axios from "axios"
import { apiUrl } from "../../config/constants"

import { selectToken } from "./selectors"

function errorHandle(data){
    return {
        type: "ERROR_HANDLE",
        payload: data,
    }
}

function validUser(data){
    return {
        type: "VALID_USER",
        payload: data,
    }
}

function notFavorite(favoriteData){
    return {
        type: "NOT_FAVORITE",
        payload: favoriteData
    }
}

function setFavorites(favoriteData){
    return {
        type: "SET_FAVORITE",
        payload: favoriteData
    }
}

function setNewUser(userData){
    return {
        type: "SET_NEW_USER",
        payload: userData
    }
}

export function setUser(userData){
    return {
        type: "SET_USER",
        payload: userData
    }
}

export function getUser(email, password){
    return async function thunk3(dispatch, getState){
        try{
            const userCheck = await axios.post(`${apiUrl}/login`, {
                email, 
                password,
            })
            console.log("user check test:", userCheck)
            
            dispatch(setUser(userCheck.data))

        } catch(error){
            console.log(error.response.data)
            if(error){
                dispatch(errorHandle(error.response.data))
            }
        }
    }
}

export function validateUser(){
    return async function thunk15(dispatch, getState){
        const token = selectToken(getState())
        // console.log("token action test", token)

        if(token === null){
            return
        }

        try{
            const user = await axios.get(`${apiUrl}/user`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log("user test action", user)
            dispatch(validUser(user.data))


        } catch(error){
            console.log(error.message)
        }
    }
}

export function removeUser(){
    return {
        type: "REMOVE_USER"
    }
}

export function newUser(
    firstName,
    lastName,
    email,
    phone,
    address,
    dateOfBirth,
    password){
        return async function thunk4(dispatch, getState){
            try{
                const userSignedUp = await axios.post(`${apiUrl}/signup`,{
                    firstName,
                    lastName,
                    email,
                    phone,
                    address,
                    dateOfBirth,
                    password,
                })
                // console.log("new user test", userSignedUp)

                dispatch(setNewUser(userSignedUp.data))

            } catch(error){
                console.log(error.message)
            }
        }
}

export function getFavorites(){
    return async function thunk7(dispatch, getState){
        const tokenNeeded = getState().user.token
        // console.log(tokenNeeded)
        try{
            const favorites = await axios.get(`${apiUrl}/favorites/fav`,{
                headers:{
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            // console.log("favorites test", favorites)

            dispatch(setFavorites(favorites.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function newFavorite(id){
    // console.log("token test", token)
    return async function thunk8(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const sendFavorite = await axios.post(`${apiUrl}/favorites/products/${id}`, {},{
                headers:{
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            // console.log("new favorite test", sendFavorite)

            dispatch(setFavorites(sendFavorite.data))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function removeFavorite(id){
    return async function thunk9(dispatch, getState){
        const tokenNeeded = getState().user.token
        try{
            const deleteFavorite = await axios.delete(`${apiUrl}/favorites/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenNeeded}`
                }
            })
            // console.log("remove favorite test", deleteFavorite)
            dispatch(notFavorite(deleteFavorite.data))

        } catch(error){
            console.log(error.message)
        }
    }
}
