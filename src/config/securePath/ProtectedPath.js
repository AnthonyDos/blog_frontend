import { Navigate } from "react-router-dom"
import { PATH_HOME } from "../path/pathClient"


const ProtectedPath = ({ isLoggedIn,children }) => {
    
    console.log(children)
    console.log(isLoggedIn)
    if (isLoggedIn === "false" || isLoggedIn === null) {
        return <Navigate to={PATH_HOME}/>
    }
    return children;
}

export default ProtectedPath;