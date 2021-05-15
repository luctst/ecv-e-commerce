import './style.scss';
import { Link } from "react-router-dom";

function LinkButton(props) {
    return (
        <Link className="link" to={props.routeData}>
            <span>{props.children}</span>
        </Link>
    )
}

export default LinkButton;