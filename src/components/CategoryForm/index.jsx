import './style.scss';
import Input from '../Input';
import Button from '../Button';

function CategoryForm(props) {
    return (
        <div className="categories-form">
            <h1>{props.title}</h1>
            <form>
                <Input type="text" required={true} value={props.name}>Nom de la catégorie</Input>
                <Button type="submit">{props.button}</Button>
            </form>
        </div>
    )
}

export default CategoryForm;