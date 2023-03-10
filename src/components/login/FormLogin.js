import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PATH_ACCOUNT, PATH_HOME } from "../../config/path/pathClient";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../../config/regex/regex";
import { loginService } from "../../services/AuthService";
/**
 * 
 * Gestion du formulaire avec formik et yup pour la validation des données.
 * Function signinUser appel le loginService
 * changeShow affiche la vue selon si le user isLogged ou non dans le cas contraire il pourra s'authentifié sans changer de page
 * 
 */

const FormLogin = (props) => {
    const { setShowBtnAddComment, isLoggedIn } = props;
    const pathLocation = useLocation();
    const navigate = useNavigate();

    const validationSchema = Yup.object().shape({
        email: Yup.string().required("L'email est obligatoire")
            .email("Veuillez entrer une adresse email valide"),
        password: Yup.string().required("Le mot de passe est obligatoire")
            .min(8,"Le mot de passe doit contenir au minimum 8 caractères")
    })

    const initialValues = {
        email: "",
        password: ""
    }

    const signinUser = (formValues) => {
        loginService(formValues)
        setShowBtnAddComment(true)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: signinUser,
        validationSchema
    })

    const changeShow = (e) => {
        e.preventDefault()
        setShowBtnAddComment(true)
        const isLogged = localStorage.getItem("isLoggedIn")

        if (isLogged === 'true') {
            isLoggedIn(true)
        }
        setShowBtnAddComment(true)
    }

    return(
        <form className="container_formConnexion" onSubmit={formik.handleSubmit}>
            <div className="formConnexion_input">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" {...formik.getFieldProps("email")}/>
                { 
                    formik.errors.email && 
                    formik.touched.email && 
                    <span>{formik.errors.email}</span> 
                }
            </div>
            <div className="formConnexion_input">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" {...formik.getFieldProps("password")}/>
                { 
                    formik.errors.password && 
                    formik.touched.password && 
                    <span color="red">{formik.errors.password}</span> 
                }
            </div>
            <div className="btn_formConnexion">
                { 
                    pathLocation.pathname.includes("article") ? 
                        <button className="btn_connexion" onClick={()=>changeShow()} >se connecter</button> 
                    : <button onClick={()=>navigate(PATH_ACCOUNT)} className="btn_connexion">se connecter</button>
                }
                <button 
                    className="btn_connexion" 
                    onClick={()=> navigate(PATH_HOME)}
                >
                    retour
                </button>
            </div>
        </form>
    )
}

export default FormLogin;