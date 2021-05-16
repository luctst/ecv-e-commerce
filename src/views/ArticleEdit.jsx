import ArticleForm from "../components/ArticleForm";
import { useSelector } from "react-redux";
import { getUserArticle } from "../store/articles/selectors";

function ArticleEdit(props) {
    const article = useSelector(state => getUserArticle(state, props.match.params.id));
    if (article) {
        return (
            <div>
                <ArticleForm
                    title="Modifier l'article"
                    data={article}
                    button="Modifier"
                />
            </div>
        )
    } else {
        return <p>Vous n'avez pas le droit de modifier cet article</p>
    }
}

export default ArticleEdit;