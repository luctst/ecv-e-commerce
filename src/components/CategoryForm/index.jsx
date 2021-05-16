import { connect } from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router';

import './style.scss';
import Button from '../Button';
import Upload from "../Upload";
import api from '../../api/index';
import { addNewCategory, updateCategory } from '../../store/category/actions';

function CategoryForm({ userData, title, image, button, addNewCategory, updateCategory, match }) {
    const [newCategory, setNewCategory] = useState({
        userId: userData.userId
    });
    const [redirect, setRedirect] = useState(false);

    function updateNewCategory (e) {
        const cpNewCategory = { ...newCategory };
        const valueTrim = e.target.value.trim().toLowerCase();

        cpNewCategory.name = e.target.value;

        if (valueTrim.includes(' ')) {
            const stringSplit = valueTrim.split(' ').join('-');

            cpNewCategory.handle = stringSplit;
            return setNewCategory(cpNewCategory);
        }

        cpNewCategory.handle = valueTrim;
        return setNewCategory(cpNewCategory);
    }

    async function postNewCategory (e) {
        try {
            e.preventDefault();

            if (match) {
                const { data } = await api.patch(`/600/categories/${match.params.id}`, newCategory);
                updateCategory(match.params.id, data);
                return setRedirect(true);
            }


            const { data } = await api.post('/categories', newCategory);
            addNewCategory(data);
            setRedirect(true);
        } catch (error) {
            throw error;
        }
    }

    if (redirect) {
        return <Redirect to="/mon-compte"/>
    }

    return (
        <div className="categories-form">
            <h1>{title}</h1>
            <form onSubmit={postNewCategory}>
                <label>
                    <span>Nom de la catégorie</span>
                    <input type="text" required="required" onChange={updateNewCategory}/>
                </label>
                <Upload image={image}>Photo de la catégorie</Upload>
                <Button type="submit">{button}</Button>
            </form>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        userData: state.users.connected
    }
}

export default connect(
    mapStateToProps,
    { addNewCategory, updateCategory}
)(CategoryForm);