import './style.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/icons/search.svg';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li className="logo">
                        <Link to="/">
                            <img src={logo} alt="News"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/articles">L'actualité</Link>
                    </li>
                    <li>
                        <Link to="/connexion">Connexion</Link>
                    </li>
                    <li>
                        <Link to="/inscription">Inscription</Link>
                    </li>
                    <li>
                        <Link to="/">
                            <img src={search} alt="Faire une recherche"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

