import './style.scss';
import Upload from "../../Upload";
import Input from "../../Input";
import Button from "../../Button";
import { useSelector } from 'react-redux'
import { getCurrentUser } from "../../../store/users/selectors";

function UserForm() {
    const user = useSelector(getCurrentUser);
    return (
        <section className="account-informations">
            {user &&
                <form>
                    <Upload image={user.avatar}>Url de votre photo de profil</Upload>
                    <Input value={user.firstname} type="text" required={true}>Prénom</Input>
                    <Input value={user.lastname} type="text" required={true}>Nom</Input>
                    <Input value={user.email} type="email" required={true}>Email</Input>
                    <Input type="password" required={true}>Mot de passe</Input>
                    <Button type="submit">Modifier mes informations</Button>
                </form>
            }
        </section>
    );
}

export default UserForm;
