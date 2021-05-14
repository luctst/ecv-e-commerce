import { connect } from 'react-redux';
import './style.scss';
import CategoriesRadio from "../CategoriesRadio";
import List from "../List";
import { useState } from "react";

function ArticlesList({ all_articles }) {

    const [articles, setArticles] = useState(all_articles);

    function handleChange(categoryId) {
        setArticles(categoryId === 0 ? all_articles : all_articles.filter(a => a.categoryId === categoryId))
    }

    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                <form>
                    <CategoriesRadio onChange={handleChange}/>
                </form>
            </div>
            <List articles={articles}/>
        </section>
    );
}

function mapStateToProps (state) {
    return {
        all_articles: state.articles
    }
}

export default connect(mapStateToProps)(ArticlesList);
