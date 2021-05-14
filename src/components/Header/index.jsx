import './style.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/icons/search.svg';
import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";

function Header() {

    const [open, setOpen] = useState(false);

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
                        <Link to="/articles">Tous nos articles</Link>
                    </li>
                    <li>
                        <Link to="/connexion">Connexion</Link>
                    </li>
                    <li>
                        <Link to="/inscription">Inscription</Link>
                    </li>
                    <li>
                        <Link to="/mon-compte">Mon compte</Link>
                    </li>
                    <li>
                        <button onClick={() => setOpen(!open)}>
                            <img src={search} alt="Faire une recherche"/>
                        </button>
                    </li>
                </ul>
            </nav>
            {open && (
                <form className="search">
                    <Input type="text" required={true}>Rechercher</Input>
                    <Button type="submit">OK</Button>
                </form>
            )}
        </header>
    );
}

export default Header;

