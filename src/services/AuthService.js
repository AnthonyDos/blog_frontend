import axios from "axios";
import * as API_CALL from "../config/path/pathApi";
import { PATH_ACCOUNT } from "../config/path/pathClient";

export const loginService = (value, navigate) => {
    console.log(value)
    axios.post(API_CALL.BASE_URL + API_CALL.LOGIN,value)
    .then((response) => {
        localStorage.setItem("access_token",JSON.stringify(response.data))
        localStorage.setItem("isLoggedIn", true);
        console.log(response)
        if (response.data.token) {
            navigate(PATH_ACCOUNT);
        }
        return response;
    })
    .catch((error)=> {
        localStorage.setItem("isLoggedIn", false)
        console.log({error : error})
    })
}