import './style.scss';

function Textarea(props) {

    function valueChange(value) {
        if(props.onChange) {
            props.onChange(value)
        }
    }

    return (
        <label>
            <span>{props.children}</span>
            <textarea
                placeholder={props.placeholder}
                required={props.required}
                name={props.name}
                defaultValue={props.value}
                onChange={e => valueChange(e.target.value)}
            />
        </label>
    )
}

export default Textarea;