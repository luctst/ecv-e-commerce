import './style.scss';
import Input from "../Input";
import Textarea from "../Textarea";
import Upload from "../Upload";
import Button from "../Button";
import CategoriesRadio from "../CategoriesRadio";
import LinkButton from "../LinkButton";

function ArticleForm(props) {

    return (
        <form className="article-form">
            <h1>{props.pageTitle}</h1>
            <CategoriesRadio>
                <LinkButton routeData="/categorie/creer">Créer une catégorie</LinkButton>
            </CategoriesRadio>
            <div>
                <Upload image={props.image}>Url de la photo</Upload>
                <div>
                    <Input type="text" required={true} value={props.title}>Titre</Input>
                    <Input type="number" required={true} value={props.price}>Prix</Input>
                    <Input type="text" required={true} value={props.brand}>Marque</Input>
                    <Textarea required={true} value={props.description}>Description de l'article</Textarea>
                    <Button type="submit">Valider</Button>
                </div>
            </div>
        </form>
    )
}

export default ArticleForm;