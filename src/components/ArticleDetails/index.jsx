import './style.scss';
import LazyImage from "../LazyImage";
import { Link } from "react-router-dom";

function ArticleDetails() {
    return (
        <section className="article-details">
            <LazyImage src="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/4.4d7a51ab.jpg" alt="Titre de l'article"/>
            <div>
                <Link to="/" class="category">Actualité</Link>
                <p className="date">20/02/2021</p>
                <h1>Article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores beatae dignissimos distinctio facere magni mollitia nulla officiis, optio, quaerat quasi qui recusandae repellendus rerum sequi soluta tempora totam.</p>
            </div>
        </section>
    )
}

export default ArticleDetails;