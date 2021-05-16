import './style.scss';
import { useState } from "react";
import { decode } from 'jsonwebtoken';
import api from '../../../api';
import { useDispatch } from "react-redux";
import { logUser } from "../../../store/users/actions";
import { useHistory } from 'react-router-dom'
import Button from "../../Button";

function LoginForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
       email: '',
       password: ''
    });
    const [error, setError] = useState(false);

    const handleUserChange = event => {
        setError(false);
        let data = {...user};
        data[event.target.name] = event.target.value;
        setUser(data)
    };

    const submit = e => {
        e.preventDefault();
        api.post('/login', user)
            .then((res) => {
                const token = res.data.accessToken;
                localStorage.setItem('accessToken', token);
                const jwtData = decode(localStorage.getItem('accessToken'));
                const userId = parseInt(jwtData.sub);
                api.get(`/users/${userId}`)
                    .then(userData => dispatch(logUser({
                        ...userData.data,
                        password: null
                    })));
                history.push('/mon-compte')
            })
            .catch(() => setError(true))
    };

    return (
        <section className="login-form">
            <form onSubmit={submit}>
                <h1>Connexion</h1>
                {error &&
                    <p className="error">Adresse email ou mot de passe incorrect</p>
                }
                <label>
                    <span>Email</span>
                    <input type="email" required="required" name="email" onChange={handleUserChange}/>
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input type="password" required="required" name="password" onChange={handleUserChange}/>
                </label>
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}

export default LoginForm;