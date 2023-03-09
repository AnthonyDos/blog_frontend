import { BrowserRouter as Link } from 'react-router-dom';
import "../../assets/css/footer.css";
const Footer = () => {

    return(
        <div className='container_footer'>
            <div className='footer_link'>
                <p><Link to='/'>Qui sommes-nous ?</Link></p>
                <p><Link to='/'>Agenda</Link></p>
                <p><Link to='/'>Nous contacter</Link></p>
                <p><Link to='/'>Liste des articles</Link></p>
            </div>
            <div className='footer_link'>
                <p><Link to='/'>Mentions légales</Link></p>
                <p><Link to='/'>CGU</Link></p>
                <p><Link to='/'>Confidentialité</Link></p>
                <p><Link to='/'>Gérer mes cookies</Link></p>
            </div>
            <div>
                <h1>Devenez partenaire de l'Info du Digital, le média n°1 du digital</h1>
            </div>
        </div>
    )
}

export default Footer;