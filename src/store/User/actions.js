import axios from "axios"
import { apiUrl } from "../../config/constants"

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

function setUser(userData){
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
            // console.log("user check test:", userCheck)

            dispatch(setUser(userCheck.data))

        } catch(error){
            console.log(error.message)
        }
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

export function getFavorites(token){
    return async function thunk7(dispatch, getState){
        try{
            const favorites = await axios.get(`${apiUrl}/favorites`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log("favorites test", favorites)

            dispatch(setFavorites(favorites.data.products))

        } catch(error){
            console.log(error.message)
        }
    }
}

export function newFavorite(id, token){
    // console.log("token test", token)
    return async function thunk8(dispatch, getState){
        try{
            const sendFavorite = await axios.post(`${apiUrl}/favorites/products/${id}`, {},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log("new favorite test", sendFavorite)

            dispatch(setFavorites(sendFavorite.data))

        } catch(error){
            console.log(error.message)
        }
    }
}
