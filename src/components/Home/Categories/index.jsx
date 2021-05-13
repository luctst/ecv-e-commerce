import './style.scss';
import { Link } from "react-router-dom";

function Categories() {
    return (
        <section className="home-categories">
            <ul>
                <li><Link to="/">Actualité</Link></li>
                <li><Link to="/">Fashion</Link></li>
                <li><Link to="/">Sport</Link></li>
                <li><Link to="/">Commerce</Link></li>
                <li><Link to="/">International</Link></li>
                <li><Link to="/">Musique</Link></li>
                <li><Link to="/">Cinéma</Link></li>
            </ul>
        </section>
    );
}

export default Categories;
