import './style.scss';
import { useSelector } from 'react-redux';
import { getCategories } from "../../store/category/selectors";

function CategoriesRadio({ children, onChange, selected = 0 }) {

    const categories = useSelector(getCategories);

    function categoryChange(id) {
        if(onChange) {
            onChange(id)
        }
    }

    return (
        <div className="categories-radio">
            {categories.map((category, index) => {
                return <label key={`category-${index}`}>
                    <input defaultChecked={selected === category.id} type="radio" value={category.id} name="category" onChange={() => categoryChange(category.id)}/>
                    <span>{category.name}</span>
                </label>
            })}
            {children}
        </div>
    )
}

export default CategoriesRadio;