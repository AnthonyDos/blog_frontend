import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { signupService } from "../../services/AuthService";
import { useEffect, useRef, useState } from "react";
import { PATH_HOME } from "../../config/path/pathClient";
import "../../assets/css/formSignup.css";

const FormSignup = () => {
    const navigate = useNavigate();
    const [ uploadImageData, setUploadImageData ] = useState();
    const [ gender, setGender ] = useState("");
    const refImage = useRef(null);

    const validationSchema = Yup.object().shape({
        lastName: Yup.string().required("Le nom est obligatoire"),
        firstName: Yup.string().required("Le prénom est obligatoire"),
        email: Yup.string().required("L'email est obligatoire")
            .email("Veuillez entrer une adresse email valide"),
        password: Yup.string().required("Le mot de passe est obligatoire")
            .min(8,"Le mot de passe doit contenir au minimum 8 caractères"),
        confirmedPassword: Yup.string().oneOf([Yup.ref("password")],"Les mots de passe ne correspondent pas"),
        category:Yup.string().required("La catégorie est obligatoire")
    })

    const uploadImage = (e) => {
        const file = e.target.files[0];
        console.log(file)
        setUploadImageData(file);
    };

    const initialValues = {
        gender:"",
        lastName:"",
        firstName:"",
        email: "",
        password: "",
        confirmedPassword:"",
        category:""
    }

    const handleSubmit = (formValues) =>{
        const formSignupValidate = {
            gender: gender,
            lastName: formValues.lastName,
            firstName: formValues.firstName,
            email: formValues.email,
            password:formValues.password,
            image: uploadImageData,
            category: formValues.category
        }
        signupService(formSignupValidate, navigate)
    }

    const formik = useFormik({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema
    })

    const cancelImage = (e) => {
        e.preventDefault();
        refImage.current.value = "";
    };

    useEffect(()=> {

    },[uploadImageData, gender])

    return(
        <form className="container_form_singup" onSubmit={formik.handleSubmit}>
            <div className="form_singup_infoUser">
                <label>Genre</label>
                <select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)}>
                    <option value="male">homme</option>
                    <option value="female">femme</option>
                </select>
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="lastName">Nom :</label>
                <input type="text" name="lastName" id="lastName" {...formik.getFieldProps("lastName")}/>
                { 
                    formik.errors.lastName && formik.touched.lastName &&
                    <span className="error_form">{formik.errors.lastName}</span>
                }
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="firstName">Prénom :</label>
                <input type="text" name="firstName" id="firstName" {...formik.getFieldProps("firstName")}/>
                { 
                    formik.errors.firstName && formik.touched.firstName &&
                    <span className="error_form">{formik.errors.firstName}</span>
                }
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" {...formik.getFieldProps("email")}/>
                { 
                    formik.errors.email && formik.touched.email &&
                    <span className="error_form">{formik.errors.email}</span>
                }
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" id="password"  {...formik.getFieldProps("password")}/>
                { 
                    formik.errors.password && formik.touched.password &&
                    <span className="error_form">{formik.errors.password}</span> 
                }
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="confirmedPassword">Confirmation mot de passe :</label>
                <input type="password" name="confirmedPassword" id="confirmedPassword"  {...formik.getFieldProps("confirmedPassword")}/>
                { 
                    formik.errors.confirmedPassword && formik.touched.confirmedPassword &&
                    <span className="error_form">{formik.errors.confirmedPassword}</span> 
                }
            </div>
            <div className="form_data-img">
                <div>
                    <label className="form_data-label">Image boutique</label>
                    <input
                        className="form_dataImg"
                        ref={refImage}
                        name="image"
                        type="file"
                        onChange={uploadImage}
                    />
                </div>
                <button className="form_data-img-btn" onClick={cancelImage}>
                    annuler
                </button>
                { 
                    formik.errors.image && formik.touched.image &&
                    <span className="error_form">{formik.errors.image}</span> 
                }
            </div>
            <div className="form_singup_infoUser">
                <label htmlFor="category">Catégorie</label>
                <input type="text" name="category" id="category"  {...formik.getFieldProps("category")}/>
                { 
                    formik.errors.category && formik.touched.category &&
                    <span className="error_form">{formik.errors.category}</span> 
                }
            </div>
            <div className="btn_formSignup">
                <button className="btn_connexion" >se connecter</button>
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

export default FormSignup;