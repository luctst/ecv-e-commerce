import './style.scss';
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import List from "../List";

function Search({ all_articles }) {

    let { terms } = useParams();
    terms = terms ? terms.toLowerCase() : '';
    const articles = [...all_articles].filter(a => a.title.toLowerCase().includes(terms) || a.brand.toLowerCase().includes(terms) || a.description.toLowerCase().includes(terms));

    return (
       <div className="search-results">
           <h1>Résultats pour : {terms}</h1>
           {!articles.length && (
               <p>Aucun article ne correspond à votre recherche</p>
           )}
           {articles.length && (
               <div>
                   <p>[{articles.length}] résultats</p>
                   <List articles={articles}/>
               </div>
           )}
       </div>
    )
}

function mapStateToProps (state) {
    return {
        all_articles: state.articles
    }
}

export default connect(mapStateToProps)(Search);