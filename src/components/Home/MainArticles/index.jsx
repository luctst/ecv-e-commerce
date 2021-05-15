import { connect } from 'react-redux';
import './style.scss';
import List from "../../List";

function Categories({ articles }) {
    return (
        <section className="main-articles">
            {articles && articles.length &&
                <List articles={articles.slice(0, 4)} filter={0}/>
            }
        </section>
    );
}

function mapStateToProps (state) {
    return {
        articles: state.articles
    }
} 

export default connect(mapStateToProps)(Categories);
