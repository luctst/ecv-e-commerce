import { connect } from 'react-redux';
import './style.scss';
import Upload from "../../Upload";
import Input from "../../Input";
import Button from "../../Button";

function Informations({ user }) {
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

function mapStateToProps (state) {
    return {
        user: state.users.connected
    }
}

export default connect(mapStateToProps)(Informations);
