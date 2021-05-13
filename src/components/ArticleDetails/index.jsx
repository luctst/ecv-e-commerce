import './style.scss';
import LazyImage from "../LazyImage";
import { Link } from "react-router-dom";
import LinkButton from "../LinkButton";

const article = {
    id: 1,
    handle: 'chemise-a-fleur',
    title: "Chemise à fleur",
    brand: "Levi's",
    price: "79.00",
    image: "https://medias-cache.citadium.com/fr/levis-chemise-bleu/image/35/8/3025358.426.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores beatae dignissimos distinctio facere magni mollitia nulla officiis.",
    category: "Chemise"
};

function ArticleDetails() {
    return (
        <section className="article-details">
            <LazyImage src={article.image} alt={article.title}/>
            <div>
                <LinkButton link="/articles">{article.category}</LinkButton>
                <p className="brand">{article.brand}</p>
                <h1>{article.title}</h1>
                <p className="price">{article.price}€</p>
                <p>{article.description}</p>
            </div>
        </section>
    )
}

export default ArticleDetails;