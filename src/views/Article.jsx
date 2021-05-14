import ArticleDetails from "../components/ArticleDetails";

function Article(props) {
    return (
        <ArticleDetails articleId={props.match.params.id}/>
    )
}

export default Article;