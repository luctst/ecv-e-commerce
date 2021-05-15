import { connect } from 'react-redux';
import './style.scss';
import CategoriesRadio from "../CategoriesRadio";
import List from "../List";
import { useState } from "react";

function ArticlesList({ all_articles, categories }) {

    const [articles, setArticles] = useState(all_articles);
    let params = new URLSearchParams(window.location.search);
    let categoryHandle = params.get('categorie');
    let category;
    if (categoryHandle && categoryHandle !== '') {
        category = categories.find(c => c.handle === categoryHandle);
    }
    category = category ? category.id : 0;

    function handleChange(categoryId) {
        setArticles(categoryId === 0 ? all_articles : all_articles.filter(a => a.categoryId === categoryId))
    }

    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                <form>
                    <CategoriesRadio selected={category} onChange={handleChange}/>
                </form>
            </div>
            <List articles={articles}/>
        </section>
    );
}

function mapStateToProps (state) {
    return {
        all_articles: state.articles,
        categories: state.category
    }
}

export default connect(mapStateToProps)(ArticlesList);
