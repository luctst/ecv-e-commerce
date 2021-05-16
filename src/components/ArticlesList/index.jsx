import './style.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getCategories } from "../../store/category/selectors";
import { getArticles } from "../../store/articles/selectors";
import CategoriesRadio from "../CategoriesRadio";
import List from "../List";

function ArticlesList({ location }) {

    const categories = useSelector(getCategories);
    const articles = useSelector(getArticles);
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
                {categories && categories.length &&
                    <form>
                        <CategoriesRadio key={filter} selected={filter} onChange={handleChange}/>
                    </form>
                }
            </div>
            {articles && articles.length &&
                <List articles={articles} filter={filter}/>
            }
        </section>
    );
}

export default ArticlesList;
