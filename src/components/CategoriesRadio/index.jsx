import { connect } from 'react-redux';

import './style.scss';

function CategoriesRadio({ children, categories, onChange, selected = 0 }) {

    return (
        <div className="categories-radio">
            {categories.map((category, index) => {
                return <label key={`category-${index}`}>
                    <input defaultChecked={selected && selected === category.id} type="radio" value={category.id} name="category" onChange={() => onChange(category.id)}/>
                    <span>{category.name}</span>
                </label>
            })}
            {children}
        </div>
    )
}

function mapStateToProps (state) {
    return {
        categories: state.category
    }
}

export default connect(mapStateToProps)(CategoriesRadio);