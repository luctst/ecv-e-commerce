import { connect } from 'react-redux';

import './style.scss';
import LazyImage from "../LazyImage";
import LinkButton from "../LinkButton";

function ArticleDetails({ article }) {
    return (
        <section className="article-details">
            <LazyImage src={article.image} alt={article.title}/>
            <div>
                <LinkButton routeData={{ pathname: '/articles', state: { categoryId: article.categoryId}}}>{article.category.name}</LinkButton>
                <p className="brand">{article.brand}</p>
                <h1>{article.title}</h1>
                <p className="price">{article.price}€</p>
                <p>{article.description}</p>
            </div>
        </section>
    )
}

function mapStateToProps (state, ownProps) {
    const article = state.articles.find(article => article.id === parseInt(ownProps.articleId))
    const category = state.category.find(cat => cat.id === article.categoryId);

    return {
        article: {
            ...article,
            category: {
                handle: category.handle,
                name: category.name
            }
        }
    }
}

export default connect(mapStateToProps)(ArticleDetails);