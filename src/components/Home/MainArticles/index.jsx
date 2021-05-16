import './style.scss';
import { useSelector } from 'react-redux';
import { getArticles } from "../../../store/articles/selectors";
import List from "../../List";

function Categories() {
    const articles = useSelector(getArticles);
    return (
        <section className="main-articles">
            {articles && articles.length &&
                <List articles={articles.slice(0, 4)}/>
            }
        </section>
    );
}

export default Categories;
