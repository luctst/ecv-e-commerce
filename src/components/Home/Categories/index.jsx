import { connect } from 'react-redux';

import './style.scss';
import LinkButton from "../../LinkButton";

function SmallArticle({ categories }) {
    return (
        <section className="home-categories">
            <h2>Toutes nos catégories</h2>
            <ul>
                {categories.map((category, index) => {
                    return <li key={`category-${index}`}>
                        <LinkButton link={`/articles?categorie=${category.handle}`}>{category.name}</LinkButton>
                    </li>
                })}
            </ul>
        </section>
    );
}

function mapStateToProps (state) {
    return {
        categories: state.category
    }
}

export default connect(mapStateToProps)(SmallArticle);
