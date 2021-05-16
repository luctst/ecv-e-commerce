import './style.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { deleteCategoryById } from '../../../store/category/actions';
import { deleteArticleById } from '../../../store/articles/actions';
import { getUserCategories } from "../../../store/category/selectors";
import { getUserArticles } from "../../../store/articles/selectors";
import UserForm from "../UserForm";
import LinkButton from "../../LinkButton";

function AccountDetails() {

    const dispatch = useDispatch();
    const categories = useSelector(getUserCategories);
    const articles = useSelector(getUserArticles);

    const deleteCategory = id => dispatch(deleteCategoryById(id));
    const deleteArticle = id => dispatch(deleteArticleById(id));

    return (
        <div className="page-account">
            <h1>Mon compte</h1>
            <div className="account-details">
                <UserForm/>
                <div>
                    <h2>Mes catégories</h2>
                    <p>Vous n'avez pas encore créé de catégories</p>
                    <LinkButton routeData="/categorie/creer">Ajouter une catégorie</LinkButton>
                    <table className="my-categories">
                        <tbody>
                            {categories.map((category, index) => {
                                return <tr key={`my-category-${index}`}>
                                    <td>
                                        <div>
                                        <img src={category.image} alt={category.name}/>
                                        <p>{category.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <Link to={`/categorie/modifier/${category.id}`} className="modify">Modifier</Link>
                                            <button className="delete" onClick={() => deleteCategory(category.id)}>Supprimer</button>
                                        </div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <section className="account-articles">
                <h2>Mes articles</h2>
                <p>Vous n'avez pas encore créé d'article</p>
                <LinkButton routeData="/article/creer">Créer un article</LinkButton>
                <table>
                    <tbody>
                        {articles.map((article, index) => {
                            return <tr key={`my-article-${index}`}>
                                <td><img src={article.image} alt={article.title}/></td>
                                <td>
                                    <p>{article.brand}</p>
                                    <p>{article.title}</p>
                                    <p>{article.price}€</p>
                                </td>
                                <td>
                                    <div>
                                        <Link to={`/article/modifier/${article.id}`} className="modify">Modifier</Link>
                                        <button className="delete" onClick={() => deleteArticle(article.id)}>Supprimer</button>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default AccountDetails;