import { connect } from 'react-redux';

import './style.scss';

function CategoriesRadio({ children, categories}) {
    return (
        <div className="categories-radio">
            {categories.map((category, index) => {
                return <label key={`category-${index}`}>
                    <input type="radio" value={category.id} name="category"/>
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