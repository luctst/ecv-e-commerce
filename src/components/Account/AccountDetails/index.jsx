import { connect } from 'react-redux';

import './style.scss';
import Informations from "../Informations";
import LinkButton from "../../LinkButton";
import { Link } from "react-router-dom";

function AccountDetails({ articles, categories }) {
    return (
        <div className="page-account">
            <h1>Mon compte</h1>
            <div className="account-details">
                <Informations/>
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
                                            <Link to={`/categorie/modifier/${category.handle}`} className="modify">Modifier</Link>
                                            <Link to="/" className="delete">Supprimer</Link>
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
                                        <Link to="/" className="delete">Supprimer</Link>
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

function mapStateToProps (state) {
    console.log(state);
    return {
        articles: state.articles.filter(article => article.userId === state.users.connected.userId),
        categories: state.category.filter(categori => categori.userId === state.users.connected.userId)
    }
};

export default connect(mapStateToProps)(AccountDetails);
