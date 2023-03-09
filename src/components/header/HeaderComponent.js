import logo from "../../assets/images/logo.png";
import { IoMdLogIn } from "react-icons/io";
const HeaderComponent = () => {
    return(
        <header>
            <div>
                <img src={logo} alt="logo du site" />
            </div>
            <h1>L'info du Digital</h1>
            <div>
                <button>
                    <IoMdLogIn />
                    <p>Se connecter</p>
                </button>
            </div>
        </header>
    )
}

export default HeaderComponent;