import { useState } from "react";
import FormLogin from "../../components/login/FormLogin";
import FormSignup from "../../components/login/FormSignup";
import "../../assets/css/login.css";


const Login = () => {
    const [showFormLogin, setShowFormLogin ] = useState(true);
    const [showFormSignup, setShowSignup ] = useState(false)
    
    return(
        <div className="container_connexion_login">
            <nav className="navigation_connexion">
                <button className="btn_connexion_login" onClick={()=>{setShowFormLogin(true); setShowSignup(false)}}>Connexion</button>
                <button className="btn_connexion_login" onClick={()=>{setShowFormLogin(false); setShowSignup(true)}}>Inscription</button>
            </nav>
            <div className="container_form_connexion">
                {
                    showFormLogin == true && showFormSignup == false ? <FormLogin />
                    :<FormSignup />
                }
            </div>
        </div>
    )
}

export default Login;