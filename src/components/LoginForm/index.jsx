import './style.scss';

function Login() {
    return (
        <section className="login-form">
            <form>
                <h1>Connexion</h1>
                <label>
                    <span>Email</span>
                    <input type="email"/>
                </label>
                <label>
                    <span>Mot de passe</span>
                    <input type="password"/>
                </label>
                <button className="btn" type="submit"><span>Valider</span></button>
            </form>
        </section>
    )
}

export default Login;