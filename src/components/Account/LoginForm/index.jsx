import { useState } from "react";
import { connect } from 'react-redux';
import { Redirect } from "react-router";

import { populateUser } from '../../../store/users/actions';
import api from '../../../api';
import './style.scss';
import Button from "../../Button";

function LoginForm({ populateUser }) {
    const [dataToLog, setDataToLog] = useState({});
    const [redirect, setRedirect] = useState(false);

    function updateDataToLog(e) {
        const cpDataToLog = { ...dataToLog };

        cpDataToLog[e.target.name] = e.target.value;
        setDataToLog(cpDataToLog);
    }

    async function login (e) {
        try {
            e.preventDefault();

            await api.post('/login', dataToLog);

            populateUser(dataToLog);
            setRedirect(true);
        } catch (error) {
            throw error;
        }
    }

    if (redirect) {
        return <Redirect to="/"/>
    }

    return (
        <section className="login-form">
            <form onSubmit={login}>
                <h1>Connexion</h1>
                <label>
                    <span>Email</span>
                    <input type="email" required="required" name="email" onChange={updateDataToLog}/>
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input type="password" required="required" name="password" onChange={updateDataToLog}/>
                </label>
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}

export default connect(
    null,
    { populateUser }
)(LoginForm);