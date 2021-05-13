import './style.scss';

function Button(props) {
    return (
        <button className="btn" type={props.type}>
            <span>{props.children}</span>
        </button>
    )
}

export default Button;