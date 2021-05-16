import './style.scss';
import SmallArticle from "../SmallArticle";

function List(props) {
    return (
        <ul className="list">
            {props.articles.map((article, index) => {
                return <SmallArticle key={`article-${index}`} article={article}/>
            })}
        </ul>
    );
}

export default List;
