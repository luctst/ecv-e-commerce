import './style.scss';
import Upload from "../../Upload";
import Input from "../../Input";
import Button from "../../Button";

const account = {
    firstname: "Justine",
    lastname: 'Dupont',
    email: 'justine.dupont@gmail.com',
    password: '000000',
    avatar: 'https://storage-dating.euranka.com/uploads/sites/5/2018/12/photo-profil-rencontre-2019.jpg'
};

function Informations() {
    return (
        <section className="account-informations">
            <form>
                <Upload image={account.avatar}>Url de votre photo de profil</Upload>
                <Input value={account.lastname} type="text" required={true}>Nom</Input>
                <Input value={account.firstname} type="text" required={true}>Prénom</Input>
                <Input value={account.email} type="email" required={true}>Email</Input>
                <Input value={account.password} type="password" required={true}>Mot de passe</Input>
                <Input type="password" required={true}>Confirmation du mot de passe</Input>
                <Button type="submit">Modifier mes informations</Button>
            </form>
        </section>
    );
}

export default Informations;
