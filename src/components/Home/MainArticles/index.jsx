import { connect } from 'react-redux';

import './style.scss';
import SmallArticle from "../../SmallArticle";

function Categories({ articles }) {
    return (
        <section className="main-articles">
            <ul>
                {articles.map((article, index) => {
                    if (article.inHomePage) {
                        return <SmallArticle article={article} key={`article-${index}`}/>
                    }
                })}
            </ul>
        </section>
    );
}

function mapStateToProps (state) {
    return {
        articles: state.articles
    }
} 

export default connect(mapStateToProps)(Categories);
