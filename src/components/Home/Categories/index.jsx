import './style.scss';
import { useSelector } from 'react-redux';
import { getCategories } from "../../../store/category/selectors";
import LinkButton from "../../LinkButton";

function SmallArticle() {
    const categories = useSelector(getCategories);
    return (
        <section className="home-categories">
            <h2>Toutes nos catégories</h2>
            <ul>
                {categories.map((category, index) => {
                    return <li key={`category-${index}`}>
                        <LinkButton routeData={{ pathname: "/articles", state: { categoryId: category.id }}}>{category.name}</LinkButton>
                    </li>
                })}
            </ul>
        </section>
    );
}

export default SmallArticle;
