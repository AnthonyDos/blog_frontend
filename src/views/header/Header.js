import { useEffect } from "react";
import HeaderComponent from "../../components/header/HeaderComponent";

const Header = (props) => {
    const { isLoggedIn } = props;
    useEffect(()=> {

    },[isLoggedIn])
    return(
        <div>
            <HeaderComponent isLoggedIn={isLoggedIn} />
        </div>
    )
}

export default Header;