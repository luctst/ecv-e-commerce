import './style.scss';

function Input(props) {

    function valueChange(value) {
        if(props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <label>
            <span>{props.children}</span>
            <input
                type={props.type}
                placeholder={props.placeholder}
                required={props.required}
                name={props.name}
                defaultValue={props.value}
                onChange={e => valueChange(e.target.value)}
            />
        </label>
    )
}

export default Input;