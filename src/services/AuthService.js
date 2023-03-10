import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthHeader from "../config/configAuth/AuthHeader";
import * as API_CALL from "../config/path/pathApi";
import { PATH_ACCOUNT } from "../config/path/pathClient";

export const loginService = (value, navigate) => {
    
    axios.post(API_CALL.BASE_URL + API_CALL.LOGIN,value)
    .then((response) => {
        
        console.log(response.data.token)
        localStorage.setItem("access_token",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn", true);
        if (response.data.token) {
            navigate(PATH_ACCOUNT)
        }
        return response;
    })
    .catch((error)=> {
        localStorage.setItem("isLoggedIn", false)
        console.log({error : error})
    })
}