import { BrowserRouter as Link } from 'react-router-dom';

const Footer = () => {

    return(
        <div>
            <div>
                <Link to='/'>Qui sommes-nous ?</Link>
                <Link to='/'>Agenda</Link>
                <Link to='/'>Nous contacter</Link>
                <Link to='/'>Liste des articles</Link>
            </div>
            <div>
                <Link to='/'>Mentions légales</Link>
                <Link to='/'>CGU</Link>
                <Link to='/'>Confidentialité</Link>
                <Link to='/'>Gérer mes cookies</Link>
            </div>
            <div>
                <h1>Devenez partenaire de l'Info du Digital, le média n°1 du digital</h1>
            </div>
        </div>
    )
}

export default Footer;