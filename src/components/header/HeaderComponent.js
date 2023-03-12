import logo from "../../assets/images/logo.png";
import "../../assets/css/header.css";
import { IoMdLogIn } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import * as PATH from "../../config/path/pathClient";
import { useEffect } from "react";

const HeaderComponent = (props) => {
    const navigate = useNavigate();
    const { isLoggedIn } = props;
    console.log(isLoggedIn)

    useEffect(()=> {

    },[isLoggedIn])

    const logoutSession = () => {
        localStorage.clear()
        navigate(PATH.PATH_HOME)
    }
    return(
        <header>
            <div className="container_logo">
                <img className="logo_site" src={logo} alt="logo du site" />
            </div>
            <h1 className="name_site">L'info du Digital</h1>
            <div className="login">
            {
                isLoggedIn == "true" ?
                    <> 
                        <Link to={PATH.PATH_ACCOUNT}>
                            <button  className="btn_login">   
                                <IoMdLogIn />
                                <p>Mon compte</p>  
                                
                            </button>
                        </Link>
                        <button onClick={(e)=> logoutSession(e)}>
                            logout
                        </button>
                    </>
                : 
                    <Link to={PATH.PATH_LOGIN}>
                        <button  className="btn_login">   
                            <IoMdLogIn />
                            <p>Se connecter / s'inscrire</p>  
                        </button>
                    </Link>
            }
            </div>
        </header>
    )
}

export default HeaderComponent;