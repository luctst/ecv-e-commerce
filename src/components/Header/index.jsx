import './style.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/icons/search.svg';
import { Link } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Header() {

    let history = useHistory();
    const [open, setOpen] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        const terms = new FormData(event.target).get('terms');
        history.push(`/recherche/${terms}`);
        setOpen(false);
    };

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
                <form className="search"  onSubmit={handleSubmit}>
                    <Input type="text" required={true} name="terms">Rechercher</Input>
                    <Button type="submit">OK</Button>
                </form>
            )}
        </header>
    );
}

export default Header;

