import './style.scss';

function Input(props) {
    return (
        <label>
            <span>{props.children}</span>
            <input type={props.type} placeholder={props.placeholder} required={props.required} name={props.name} value={props.value}/>
        </label>
    )
}

export default Input;