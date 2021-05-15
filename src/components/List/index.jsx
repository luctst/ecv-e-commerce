import './style.scss';
import SmallArticle from "../SmallArticle";

function List(props) {
    return (
        <ul className="list">
            {props.articles.map((article, index) => {
                if (
                    props.filter === 0 ||
                    props.filter === article.categoryId
                ) {
                    return <SmallArticle key={`article-${index}`} article={article}/>
                }

                return null;
            })}
        </ul>
    );
}

export default List;
