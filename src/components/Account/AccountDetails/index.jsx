import './style.scss';
import Informations from "../Informations";
import LinkButton from "../../LinkButton";
import { Link } from "react-router-dom";

const articles = [
    {
        id: 1,
        title: "Chemise à fleur",
        brand: "Levi's",
        price: "79.00",
        image: "https://medias-cache.citadium.com/fr/levis-chemise-bleu/image/35/8/3025358.426.jpg"
    },
    {
        id: 2,
        title: "Sweat oversize",
        brand: "Levi's",
        price: "75.00",
        image: "https://medias-cache.citadium.com/fr/levis-sweat-blanc/image/36/0/3025360.426.jpg"
    },
    {
        id: 3,
        title: "Coupe-vent imperméable avec capuche olive",
        brand: "Rains",
        price: "95.00",
        image: "https://medias-cache.citadium.com/fr/rains-coupe-vent-impermeable-avec-capuche-vert/image/98/6/2992986.129.jpg"
    },
    {
        id: 4,
        title: "Sac à bandoulière nightoutr",
        brand: "George Gina & Lucy",
        price: "139.00",
        image: "https://medias-cache.citadium.com/fr/george-gina-lucy-sac-a-bandouliere-noir/image/86/2/2991862.129.jpg"
    },
    {
        id: 5,
        title: "Dr. Martens en cuir black smooth",
        brand: "Dr. Martens",
        price: "160.00",
        image: "https://medias-cache.citadium.com/fr/dr-martens-dr-martens-en-cuir-noir/image/97/1/2919971.129.jpg"
    },
    {
        id: 6,
        title: "Tee-shirt col rond regular-fit",
        brand: "Tealer",
        price: "35.00",
        image: "https://medias-cache.citadium.com/fr/tealer-tee-shirt-col-rond-regular-fit-serigraphie-en-coton-blanc/image/74/0/3063740.129.jpg"
    },
    {
        id: 7,
        title: "AOP Milano mini skirt jupe",
        brand: "Calvin Klein Jeans",
        price: "69.00",
        image: "https://medias-cache.citadium.com/fr/calvin-klein-jeans-jupe-blanc/image/46/9/2899469.426.jpg"
    }
];

const categories = [
    {name: "Jupes", id: 1, handle: "jupe", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Vestes", id: 2, handle: "vestes", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Chemises", id: 3, handle: "chemises", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Robes", id: 4, handle: "robes", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Sacs", id: 5, handle: "sacs", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Chaussures", id: 6, handle: "chaussures", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Pantalons", id: 7, handle: "pantalons", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"},
    {name: "Pulls", id: 8, handle: "pulls", image: "https://medias-cache.citadium.com/image/60/9/3064609.jpg"}
];

function AccountDetails() {
    return (
        <div className="page-account">
            <h1>Mon compte</h1>
            <div className="account-details">
                <Informations/>
                <div>
                    <h2>Mes catégories</h2>
                    <p>Vous n'avez pas encore créé de catégories</p>
                    <LinkButton link="/categorie/creer">Ajouter une catégorie</LinkButton>
                    <table className="my-categories">
                        {categories.map((category, index) => {
                            return <tr key={`my-category-${index}`}>
                                <td>
                                    <div>
                                    <img src={category.image} alt={category.name}/>
                                    <p>{category.name}</p>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <Link to={`/categorie/modifier/${category.handle}`} className="modify">Modifier</Link>
                                        <Link to="/" className="delete">Supprimer</Link>
                                    </div>
                                </td>
                            </tr>
                        })}
                    </table>
                </div>
            </div>
            <section className="account-articles">
                <h2>Mes articles</h2>
                <p>Vous n'avez pas encore créé d'article</p>
                <LinkButton link="/article/creer">Créer un article</LinkButton>
                <table>
                    {articles.map((article, index) => {
                        return <tr key={`my-article-${index}`}>
                            <td><img src={article.image} alt={article.title}/></td>
                            <td>
                                <p>{article.brand}</p>
                                <p>{article.title}</p>
                                <p>{article.price}€</p>
                            </td>
                            <td>
                                <div>
                                    <Link to={`/article/modifier/${article.id}`} className="modify">Modifier</Link>
                                    <Link to="/" className="delete">Supprimer</Link>
                                </div>
                            </td>
                        </tr>
                    })}
                </table>
            </section>
        </div>

    );
}

export default AccountDetails;
