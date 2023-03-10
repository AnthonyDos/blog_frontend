import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PATH_HOME } from "../../config/path/pathClient";
import { REGEX_EMAIL, REGEX_PASSWORD } from "../../config/regex/regex";
import { loginService } from "../../services/AuthService";

const FormLogin = () => {
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
            console.log(formValues)
        loginService(formValues, navigate)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: signinUser,
        validationSchema
    })

    console.log(formik.errors.password)

    return(
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" {...formik.getFieldProps("email")}/>
                { 
                    formik.errors.email && 
                    formik.touched.email && 
                    <span>{formik.errors.email}</span> 
                }
            </div>
            <div>
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" {...formik.getFieldProps("password")}/>
                { 
                    formik.errors.password && 
                    formik.touched.password && 
                    <span color="red">{formik.errors.password}</span> 
                }
            </div>
            <div>
                <button>se connecter</button>
                <button onClick={()=> navigate(PATH_HOME)}>retour</button>
            </div>
        </form>
    )
}

export default FormLogin;