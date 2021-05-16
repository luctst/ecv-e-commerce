import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import './style.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/icons/search.svg';
import Input from "../Input";
import Button from "../Button";
import { getCurrentUser } from "../../store/users/selectors";

function Header({ userConnected }) {
    const [redirect, setRedirect] = useState(false);
    let history = useHistory();
    const [open, setOpen] = useState(false);
    const user = useSelector(getCurrentUser);

    const handleSubmit = event => {
        event.preventDefault();
        const terms = new FormData(event.target).get('terms');
        history.push(`/recherche/${terms}`);
        setOpen(false);
    };

    function disconnect(e) {
        e.preventDefault();
        localStorage.clear();
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/"/>
    }

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
                    {user ? (
                        <>
                            <li> <Link to="/mon-compte">Mon compte</Link> </li>
                            <li onClick={disconnect}>Logout</li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/connexion">Connexion</Link>
                            </li>
                            <li>
                                <Link to="/inscription">Inscription</Link>
                            </li>
                        </>
                    )}
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

function mapStateToProps (state) {
    return {
        userConnected: state.users.connected
    }
}

export default connect(mapStateToProps)(Header);

