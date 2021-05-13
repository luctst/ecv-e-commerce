import './style.scss';
import { Link } from "react-router-dom";
import LinkButton from "../../LinkButton";

const categories = [
    {name: "Jupes", id: 1, handle: "jupe"},
    {name: "Vestes", id: 2, handle: "vestes"},
    {name: "Chemises", id: 3, handle: "chemises"},
    {name: "Robes", id: 4, handle: "robes"},
    {name: "Sacs", id: 5, handle: "sacs"},
    {name: "Chaussures", id: 6, handle: "chaussures"},
    {name: "Pantalons", id: 7, handle: "pantalons"},
    {name: "Pulls", id: 8, handle: "pulls"}
];

function SmallArticle(props) {
    return (
        <section className="home-categories">
            <h2>Toutes nos catégories</h2>
            <ul>
                {categories.map((category, index) => {
                    return <li key={index}>
                        <LinkButton link={`/categories/${category.handle}`}>{category.name}</LinkButton>
                    </li>
                })}
            </ul>
        </section>
    );
}

export default SmallArticle;
