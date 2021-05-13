import './style.scss';
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";

function SmallArticle(props) {
    return (
        <li className="small-article">
            <Link to={`/articles/${props.id}`}>
                <LazyImage src={props.image} alt={props.title}/>
                <p className="brand">{props.brand}</p>
                <h2>{props.title}</h2>
                <p>{props.price}€</p>
            </Link>
        </li>
    );
}

export default SmallArticle;
