import CategoryForm from "../components/CategoryForm";

const category = {
    name: 'Jupes',
    image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"
};

function CategoryEdit() {
    return (
        <CategoryForm
            title="Modifier la catégorie"
            name={category.name}
            image={category.image}
            button="Modifier"
        />
    )
}

export default CategoryEdit;