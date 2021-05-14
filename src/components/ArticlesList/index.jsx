import { connect } from 'react-redux';

import './style.scss';
import SmallArticle from "../SmallArticle";
import CategoriesRadio from "../CategoriesRadio";

function ArticlesList({ articles }) {
    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                <form>
                    <CategoriesRadio/>
                </form>
            </div>
            <ul className="list">
                {articles.map((article, index) => {
                    return <SmallArticle key={`article-${index}`} article={article}/>
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

export default connect(mapStateToProps)(ArticlesList);
