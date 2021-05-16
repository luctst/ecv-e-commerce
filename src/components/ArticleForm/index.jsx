import './style.scss';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "../../store/users/selectors";
import { useHistory } from 'react-router-dom'
import Input from "../Input";
import Textarea from "../Textarea";
import Upload from "../Upload";
import Button from "../Button";
import CategoriesRadio from "../CategoriesRadio";
import LinkButton from "../LinkButton";
import { useState } from "react";
import { updateArticle, addArticle } from "../../store/articles/actions";

function ArticleForm({title, data, button}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const articleExist = data;
    const user = useSelector(getCurrentUser);
    const [error, setError] = useState(false);
    const [article, setArticle] = useState(
        data ? data : {
            userId: user.id,
            image: '',
            title: '',
            description: '',
            brand: '',
            price: '',
            categoryId: 0
        });

    const handleCategoryChange = categoryId => setArticle({...article, categoryId: categoryId});
    const handleImageChange = image => setArticle({...article, image: image});
    const handleFieldChange = (name, value) => {
        let newData = {...article};
        newData[name] = value;
        setArticle(newData)
    };

    const submit = e => {

        e.preventDefault();

        if (articleExist) {
            dispatch(updateArticle(article))
                .then(() => history.push('/mon-compte'))
                .catch(() => setError(true))

        } else {
            dispatch(addArticle(article))
                .then(() => history.push('/mon-compte'))
                .catch(() => setError(true))
        }
    };

    return (
        <form className="article-form" onSubmit={submit}>
            <h1>{title}</h1>
            <CategoriesRadio selected={article.categoryId} onChange={handleCategoryChange}>
                <LinkButton routeData="/categorie/creer">Créer une catégorie</LinkButton>
            </CategoriesRadio>
            <div>
                <Upload image={article.image} onChange={handleImageChange}>Url de la photo</Upload>
                <div>
                    <Input type="text" required={true} value={article.title} onChange={value => handleFieldChange('title', value)}>Titre</Input>
                    <Input type="number" required={true} value={article.price} onChange={value => handleFieldChange('price', value)}>Prix</Input>
                    <Input type="text" required={true} value={article.brand} onChange={value => handleFieldChange('brand', value)}>Marque</Input>
                    <Textarea required={true} value={article.description} onChange={value => handleFieldChange('description', value)}>Description de l'article</Textarea>
                    <Button type="submit">{button}</Button>
                </div>
            </div>
        </form>
    )
}

export default ArticleForm;