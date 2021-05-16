import { connect } from 'react-redux';

import './style.scss';
import LazyImage from "../LazyImage";
import LinkButton from "../LinkButton";

function ArticleDetails({ article }) {
    return (
        <section className="article-details">
            {article &&
                <div>
                    <LazyImage key={article.image} src={article.image} alt={article.title}/>
                    <div>
                        {article.category &&
                        <LinkButton routeData={{ pathname: '/articles', state: { categoryId: article.categoryId}}}>{article.category.name}</LinkButton>
                        }
                        <p className="brand">{article.brand}</p>
                        <h1>{article.title}</h1>
                        <p className="price">{article.price}€</p>
                        <p>{article.description}</p>
                    </div>
                </div>
            }
        </section>
    )
}

function mapStateToProps (state, ownProps) {

    const article = state.articles.find(article => article.id === parseInt(ownProps.articleId));
    const category = article ? state.category.find(cat => cat.id === article.categoryId) : null;

    return {
        article: {
            ...article,
            category: category ? {
                handle: category.handle,
                name: category.name
            } : null
        }
    }
}

export default connect(mapStateToProps)(ArticleDetails);