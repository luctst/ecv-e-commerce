import CategoryForm from "../components/CategoryForm";

const category = {
    name: 'Jupes'
};

function CategoryEdit() {
    return (
        <CategoryForm
            title="Modifier la catégorie"
            name={category.name}
            button="Modifier"
        />
    )
}

export default CategoryEdit;