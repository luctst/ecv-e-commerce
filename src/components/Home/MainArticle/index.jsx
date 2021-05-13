import './style.scss';
import { Link } from "react-router-dom";
import more from '../../../assets/images/icons/plus.svg';
import LazyImage from "../../LazyImage";

function MainArticle() {
    return (
        <section className="main-article">
            <div className="content">
                <h1>Titre de l'article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?</p>
                <Link to="/">
                    <img className="icon-more" src={more} alt="Voir l'article"/>
                </Link>
            </div>
            <LazyImage src="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/1.71935d13.jpg" alt="Titre de l'article"/>
        </section>
    );
}

export default MainArticle;

