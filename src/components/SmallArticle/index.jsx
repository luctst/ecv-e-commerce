import './style.scss';
import { Link } from "react-router-dom";
import LazyImage from "../LazyImage";

function SmallArticle(props) {
    return (
        <li className="small-article">
            <Link to="/">
                <LazyImage src={props.image} alt={props.title}/>
                <span>{props.date}</span>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </Link>
        </li>
    );
}

export default SmallArticle;
