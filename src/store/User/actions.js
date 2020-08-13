import axios from "axios"
import { apiUrl } from "../../config/constants"

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
            console.log("user check test:", userCheck)

            dispatch(setUser(userCheck.data))

        } catch(error){
            console.log(error.message)
        }
    }
}