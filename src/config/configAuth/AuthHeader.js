import { Navigate } from "react-router-dom";


const AuthHeader = () => {
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    console.log(access_token)
    if (access_token.token != null && access_token.userId != null ) {
        return {
            "Content-type": "application/json",
            Authorization: `Bearer ${access_token.token}`,
        };
    }else {
        <Navigate to="/" />;
        return {};
    }
}

export default AuthHeader;