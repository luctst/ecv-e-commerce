import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { getCurrentUser } from '../../store/users/selectors';
import { updateCategory, addCategory } from "../../store/category/actions";
import Button from '../Button';
import Upload from '../Upload';
import Input from "../Input";

function CategoryForm({ title, data, button }) {

    const history = useHistory();
    const dispatch = useDispatch();
    const categoryExist = data;
    const user = useSelector(getCurrentUser);
    const [error, setError] = useState(false);
    const [category, setCategory] = useState(
        data ? data : {
        userId: user.id,
        image: '',
        name: '',
        handle: ''
    });

    const handleNameChange = value => {
        setError(false);
        const handle = value.toLowerCase().trim().replaceAll(' ', '-');
        setCategory({
            ...category,
            name: value,
            handle: handle
        })
    };

    const handleImageChange = value => {
        setError(false);
        setCategory({
            ...category,
            image: value
        })
    };

    const submit = e => {

        e.preventDefault();

        if (categoryExist) {
            dispatch(updateCategory(category))
                .then(() => history.push('/mon-compte'))
                .catch(() => setError(true))

        } else {
            dispatch(addCategory(category))
                .then(() => history.push('/mon-compte'))
                .catch(() => setError(true))
        }
    };

    return (
        <div className="categories-form">
            <h1>{title}</h1>
            {error &&
                <p className="error">Aie, une erreur est survenue...</p>
            }
            <form onSubmit={submit}>
                <Input type="text" required={true} value={category.name} onChange={e => handleNameChange(e)}>Nom de la catégorie</Input>
                <Upload image={category.image} onChange={e => handleImageChange(e)}>Photo de la catégorie</Upload>
                <Button type="submit">{button}</Button>
            </form>
        </div>
    )
}

export default CategoryForm;