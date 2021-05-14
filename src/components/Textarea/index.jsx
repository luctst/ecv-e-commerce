import './style.scss';

function Textarea(props) {
    return (
        <label>
            <span>{props.children}</span>
            <textarea placeholder={props.placeholder} required={props.required} name={props.name}>{props.value}</textarea>
        </label>
    )
}

export default Textarea;