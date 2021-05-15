import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from "react-router-dom";

import './style.scss';
import logo from '../../assets/images/logo.svg';
import search from '../../assets/images/icons/search.svg';

function Header({ userConnected }) {
    const [redirect, setRedirect] = useState(false);

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
                    {
                        userConnected 
                            ? (
                                <>
                                    <li> <Link to="/mon-compte">Mon compte</Link> </li>
                                    <li onClick={disconnect}>Logout</li>
                                </>
                            )
                            : (
                                <>
                                    <li>
                                        <Link to="/connexion">Connexion</Link>
                                    </li>
                                    <li>
                                        <Link to="/inscription">Inscription</Link>
                                    </li>
                                </>
                            )
                    }
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

function mapStateToProps (state) {
    return {
        userConnected: state.users.connected
    }
}

export default connect(mapStateToProps)(Header);

