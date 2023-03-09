import axios from "axios";
import * as API_CALL from "../config/path/pathApi";

export const userIdService = () => {

    axios.get(API_CALL.BASE_URL + API_CALL.USER_ID)
    .then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log(err)
    });
}