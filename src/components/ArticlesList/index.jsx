import './style.scss';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getCategories } from "../../store/category/selectors";
import { getArticles, getArticlesByCategory } from "../../store/articles/selectors";
import CategoriesRadio from "../CategoriesRadio";
import List from "../List";

function ArticlesList({ location }) {

    const categories = useSelector(getCategories);
    const [filter, setFilter] = useState(0);
    const allArticles = useSelector(getArticles);
    const [articles, setArticles] = useState(allArticles);

    useEffect(function () {
        if (location.state) {
            setFilter(location.state.categoryId);
            setArticles(allArticles.filter(a => a.categoryId == location.state.categoryId))
        }
    }, []);


    function handleChange(categoryId) {
        if (filter === categoryId) return false;
        setFilter(categoryId);
        setArticles(allArticles.filter(a => a.categoryId == categoryId))
    }

    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                {categories.length &&
                    <form>
                        <CategoriesRadio key={filter} selected={filter} onChange={handleChange}/>
                    </form>
                }
            </div>
            {articles.length &&
                <List key={filter} articles={articles}/>
            }
            {!articles.length &&
                <p>Aucun article trouvé</p>
            }
        </section>
    );
}

export default ArticlesList;
