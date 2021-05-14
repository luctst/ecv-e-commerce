import './style.scss';
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";

function SmallArticle(props) {
    return (
        <li className="small-article">
            <Link to={`/articles/${props.article.id}`}>
                <LazyImage key={props.article.title} src={props.article.image} alt={props.article.title}/>
                <p className="brand">{props.article.brand}</p>
                <h2>{props.article.title}</h2>
                <p>{props.article.price}€</p>
            </Link>
        </li>
    );
}

export default SmallArticle;
