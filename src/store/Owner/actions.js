import axios from "axios"
import { apiUrl } from "../../config/constants"

function setOwnerDetails(details){
    return {
        type: "SET_OWNER",
        payload: details
    }
}

export function getOwnerDetails(){
    return async function thunk1(dispatch, getState){
        try{
            const ownerFetched = await axios.get(`${apiUrl}/me`)
            // console.log("response test", ownerFetched)

            const owner = ownerFetched
                            ? ownerFetched.data
                            : "Loading..."
            
            dispatch(setOwnerDetails(owner))

        } catch(error){
            console.log(error.message)
        }
    }
}