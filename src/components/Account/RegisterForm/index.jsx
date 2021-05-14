import { useState } from 'react';

import './style.scss';
import Button from "../../Button";
import Upload from "../../Upload";
import http from '../../../utils/http';

function RegisterForm() {
    const [formData] = useState([
        { type: 'text', required: true, label: 'Nom', ref: 'surName'},
        { type: 'text', required: true, label: 'Prénom', ref: 'name'},
        { type: 'email', required: true, label: 'Email', ref: 'email'},
        { type: 'password', required: true, label: 'Mot de passe', ref: 'password'},
        { type: 'password', required: true, label: 'Confirmation du mot de passe'}
    ]);
    const [postNewUser, setPostNewUser] = useState({});

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
                await http.post('/register', postNewUser);
            }
        } catch (error) {
            throw error;
        }
    }

    return (
        <section className="login-form">
            <form onSubmit={postUser}>
                <h1>Inscription</h1>
                <Upload>Url de votre photo de profil</Upload>
                {
                    formData.map(function (data, index) {
                        return (
                            <label key={index}>
                                <span>{data.label}</span>
                                <input type={data.type} required={data.required} onChange={e => updateDataToPost(e.target.value, data)}/>
                            </label>
                        )
                    })
                }
                <Button type="submit">Valider</Button>
            </form>
        </section>
    )
}

export default RegisterForm;