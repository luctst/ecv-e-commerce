import './style.scss';
import Button from "../../Button";
import Input from "../../Input";

function LoginForm() {
    return (
        <section className="login-form">
            <form>
                <h1>Connexion</h1>
                <Input type="email" required={true}>Email</Input>
                <Input type="password" required={true}>Mot de passe</Input>
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}

export default LoginForm;