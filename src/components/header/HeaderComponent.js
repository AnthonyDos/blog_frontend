import logo from "../../assets/images/logo.png";
import "../../assets/css/header.css";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import * as PATH from "../../config/path/pathClient";

const HeaderComponent = () => {

    return(
        <header>
            <div className="container_logo">
                <img className="logo_site" src={logo} alt="logo du site" />
            </div>
            <h1 className="name_site">L'info du Digital</h1>
            <div className="login">
            <Link to={PATH.PATH_LOGIN}>
                <button  className="btn_login">   
                    <IoMdLogIn />
                    <p>Se connecter / s'inscrire</p>  
                </button>
            </Link>
            </div>
        </header>
    )
}

export default HeaderComponent;