import { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from  'react-router-dom';
import { useHistory } from 'react-router-dom'
import './style.scss';
import Button from "../../Button";
import Upload from "../../Upload";
import api from '../../../api';
import { populateUser } from '../../../store/users/actions';
import Input from "../../Input";

function RegisterForm({ populateUser }) {

    const history = useHistory();
    const [formData] = useState([
        { type: 'file', required: true, label: 'Url de votre photo de profil', ref: 'avatar'},
        { type: 'text', required: true, label: 'Prénom', ref: 'firstname'},
        { type: 'text', required: true, label: 'Nom', ref: 'lastname'},
        { type: 'email', required: true, label: 'Email', ref: 'email'},
        { type: 'password', required: true, label: 'Mot de passe', ref: 'password'}
    ]);
    const [postNewUser, setPostNewUser] = useState({});
    const [redirect] = useState(false);

    function updateDataToPost(value, inputData) {
        const newUser = { ...postNewUser };

        if (!inputData.ref) {
            return false;
        }

        newUser[inputData.ref] = value;
        return setPostNewUser(newUser);
    }

    async function postUser(e) {
        try {
            e.preventDefault();
            const dataToInclude = formData.filter(data => data.ref).map(dataParsed => dataParsed.ref);
            const ok = dataToInclude.every(check => postNewUser.hasOwnProperty(check));

            if (ok) {
                postNewUser.role = 'admin';
                await api.post('/register', postNewUser);

                const cpNewUser = { ...postNewUser };
                cpNewUser.password = undefined;

                populateUser(cpNewUser);
                history.push('/mon-compte')
            }
        } catch (error) {
            throw error;
        }
    }

    if (redirect) {
        return <Redirect to="/"/>
    }

    return (
        <section className="login-form">
            <form onSubmit={postUser}>
                <h1>Inscription</h1>
                {
                    formData.map(function (data, index) {
                        if (data.type === 'file') {
                            return (
                                <Upload key={index} required={data.required} onChange={value => updateDataToPost(value, data)}>{data.label}</Upload>
                            )
                        } else {
                            return (
                                <Input key={index} type={data.type} required={data.required} onChange={value => updateDataToPost(value, data)}>{data.label}</Input>
                            )
                        }
                    })
                }
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}


export default connect(
    null,
    { populateUser }
)(RegisterForm);