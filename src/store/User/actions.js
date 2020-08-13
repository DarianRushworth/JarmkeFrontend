import axios from "axios"
import { apiUrl } from "../../config/constants"

export function getUser(email, password){
    return async function thunk3(dispatch, getState){
        try{
            const userCheck = await axios.post(`${apiUrl}/login`, {
                email, 
                password,
            })
            console.log("user check test:", userCheck)

        } catch(error){
            console.log(error.message)
        }
    }
}