import CategoryForm from "../components/CategoryForm";
import { useSelector } from "react-redux";
import { getUserCategory } from "../store/category/selectors";

function CategoryEdit(props) {
    const category = useSelector(state => getUserCategory(state, props.match.params.id));
    if(category) {
        return (
            <CategoryForm
                { ...props }
                title="Modifier la catégorie"
                data={category}
                button="Modifier"
            />
        )
    } else {
        return <p>Vous n'avez pas le droit de modifier cette catégorie</p>
    }
}

export default CategoryEdit;