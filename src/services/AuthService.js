import axios from "axios";
import AuthHeader from "../config/configAuth/AuthHeader";
import * as API_CALL from "../config/path/pathApi";
import { PATH_ACCOUNT } from "../config/path/pathClient";
import ProtectedPath from "../config/securePath/ProtectedPath";
import Header from "../views/header/Header";

export const loginService = (value, navigate, location, returnShowOriginView, setShowTextArea) => {
    
    axios.post(API_CALL.BASE_URL + API_CALL.LOGIN,value)
    .then((response) => {
        localStorage.setItem("access_token",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn", true);
        if (location === true) {
            returnShowOriginView()
            setShowTextArea(true)
        }else {
            navigate(PATH_ACCOUNT);
        }
        return response;
    })
    .catch((error)=> {
        localStorage.setItem("isLoggedIn", false)
        console.log({error : error})
    })
}

export const signupService = (value, navigate) => {
    
    axios.post(API_CALL.BASE_URL + API_CALL.SIGNUP,value,{headers: {
        "Content-Type": "multipart/form-data",
      }})
    .then((response) => {
        localStorage.setItem("access_token",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn", true);
        navigate(PATH_ACCOUNT);
        return response;
    })
    .catch((error)=> {
        localStorage.setItem("isLoggedIn", false)
        console.log({error : error})
    })
}