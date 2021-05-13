import './style.scss';
import Button from "../../Button";
import Input from "../../Input";
import Upload from "../../Upload";

function RegisterForm() {
    return (
        <section className="login-form">
            <form>
                <h1>Inscription</h1>
                <Upload>Url de votre photo de profil</Upload>
                <Input type="text" required={true}>Nom</Input>
                <Input type="text" required={true}>Prénom</Input>
                <Input type="email" required={true}>Email</Input>
                <Input type="password" required={true}>Mot de passe</Input>
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}

export default RegisterForm;