import axios from "axios"
import { apiUrl } from "../../config/constants"

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