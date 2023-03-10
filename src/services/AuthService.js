import axios from "axios";
import * as API_CALL from "../config/path/pathApi";

export const loginService = (value) => {
    
    axios.post(API_CALL.BASE_URL + API_CALL.LOGIN,value)
    .then((response) => {
        localStorage.setItem("access_token",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn", true);
        return response;
    })
    .catch((error)=> {
        localStorage.setItem("isLoggedIn", false)
        console.log({error : error})
    })
}