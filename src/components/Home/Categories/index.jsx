import './style.scss';
import { Link } from "react-router-dom";
import LinkButton from "../../LinkButton";

const categories = [
    {name: "Jupes", id: 1},
    {name: "Vestes", id: 2},
    {name: "Chemises", id: 3},
    {name: "Robes", id: 4},
    {name: "Sacs", id: 5},
    {name: "Chaussures", id: 6},
    {name: "Pantalons", id: 7},
    {name: "Pulls", id: 8}
];

function SmallArticle(props) {
    return (
        <section className="home-categories">
            <h2>Toutes nos catégories</h2>
            <ul>
                {categories.map((category, index) => {
                    return <li key={index}>
                        <LinkButton link={`/articles/${category.id}`}>{category.name}</LinkButton>
                    </li>
                })}
            </ul>
        </section>
    );
}

export default SmallArticle;
