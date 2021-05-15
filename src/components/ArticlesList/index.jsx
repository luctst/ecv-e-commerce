import { connect } from 'react-redux';
import './style.scss';
import CategoriesRadio from "../CategoriesRadio";
import List from "../List";
import { useState, useEffect } from "react";

function ArticlesList({ articles, categories , location }) {
    const [filter, setFilter] = useState(0);

    useEffect(function () {
        if (location.state) {
            setFilter(location.state.categoryId)
        }
    }, []);


    function handleChange(categoryId) {
        if (filter === categoryId) return false;
        setFilter(categoryId);
    }

    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                <form>
                    <CategoriesRadio selected={filter} onChange={handleChange}/>
                </form>
            </div>
            <List articles={articles} filter={filter}/>
        </section>
    );
}

function mapStateToProps (state) {
    return {
        articles: state.articles,
        categories: state.category
    }
}

export default connect(mapStateToProps)(ArticlesList);
