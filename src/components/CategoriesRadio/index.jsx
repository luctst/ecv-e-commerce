import './style.scss';

const categories = [
    {name: "Jupes", id: 1, handle: "jupe"},
    {name: "Vestes", id: 2, handle: "vestes"},
    {name: "Chemises", id: 3, handle: "chemises"},
    {name: "Robes", id: 4, handle: "robes"},
    {name: "Sacs", id: 5, handle: "sacs"},
    {name: "Chaussures", id: 6, handle: "chaussures"},
    {name: "Pantalons", id: 7, handle: "pantalons"},
    {name: "Pulls", id: 8, handle: "pulls"}
];

function CategoriesRadio(props) {
    return (
        <div className="categories-radio">
            <label><input type="radio" value="all" defaultChecked name="category"/><span>Toute l'actualité</span></label>
            {categories.map((category, index) => {
                return <label key={`category-${index}`}>
                    <input type="radio" value={category.id} name="category"/>
                    <span>{category.name}</span>
                </label>
            })}
            {props.children}
        </div>
    )
}

export default CategoriesRadio;