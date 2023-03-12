import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PATH_ACCOUNT, PATH_HOME } from "../../config/path/pathClient";
import { loginService } from "../../services/AuthService";
/**
 * 
 * Gestion du formulaire avec formik et yup pour la validation des données.
 * Function signinUser appel le loginService
 * changeShow affiche la vue selon si le user isLogged ou non dans le cas contraire il pourra s'authentifié sans changer de page
 * 
 */

const FormLogin = (props) => {
    const { setShowBtnAddComment,isLoggedIn,cancelComment } = props;
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

    const handleSubmit = (formValues) =>{
      
        console.log(formValues)
        loginService(formValues, navigate)
        setShowBtnAddComment(true)
        navigate(PATH_ACCOUNT)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema
    })
    console.log(formik.values)

    const changeShow = (e) => {
        e.preventDefault()
        const isLogged = localStorage.getItem("isLoggedIn")

        if (isLogged === 'true') {
            isLoggedIn(true)
        }
        setShowBtnAddComment(true)
    }

    const returnShowOriginView = (e) => {
        e.preventDefault();
        setShowBtnAddComment(true)
        cancelComment()
    }
    
    return(
        <form className="container_formConnexion" onSubmit={formik.handleSubmit} >
            <div className="formConnexion_input">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" {...formik.getFieldProps("email")}/>
                { 
                    formik.errors.email && formik.touched.email &&
                    <span>{formik.errors.email}</span>
                }
            </div>
            <div className="formConnexion_input">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" id="password"  {...formik.getFieldProps("password")}/>
                { 
                    formik.errors.password && formik.touched.password &&
                    <span color="red">{formik.errors.password}</span> 
                }
            </div>
            <div className="btn_formConnexion">
                { 
                    pathLocation.pathname.includes("article") ? 
                        <button className="btn_connexion" onClick={()=>changeShow()} >se connecter</button> 
                    : <button  className="btn_connexion">se connecter</button> 
                    
                }
                {
                    pathLocation.pathname.includes("article") ? 
                        <button 
                            className="btn_connexion" 
                            onClick={(e)=>returnShowOriginView(e)}
                        >
                            retour
                        </button>
                    :   <button 
                            className="btn_connexion" 
                            onClick={()=> navigate(PATH_HOME)}
                        >
                            retour
                        </button>
                }
            </div>
        </form>
    )
}

export default FormLogin;