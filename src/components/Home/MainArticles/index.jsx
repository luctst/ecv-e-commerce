import './style.scss';
import SmallArticle from "../../SmallArticle";

const articles = [
    {
        id: 1,
        handle: 'chemise-a-fleur',
        title: "Chemise à fleur",
        brand: "Levi's",
        price: "79.00",
        image: "https://medias-cache.citadium.com/fr/levis-chemise-bleu/image/35/8/3025358.426.jpg"
    },
    {
        id: 2,
        handle: 'sweat-oversize',
        title: "Sweat oversize",
        brand: "Levi's",
        price: "75.00",
        image: "https://medias-cache.citadium.com/fr/levis-sweat-blanc/image/36/0/3025360.426.jpg"
    },
    {
        id: 3,
        handle: "coupe-vent-impermeable-avec-capuche-olive",
        title: "Coupe-vent imperméable avec capuche olive",
        brand: "Rains",
        price: "95.00",
        image: "https://medias-cache.citadium.com/fr/rains-coupe-vent-impermeable-avec-capuche-vert/image/98/6/2992986.129.jpg"
    },
    {
        id: 4,
        handle: "sac-a-bandouliere-nightout",
        title: "Sac à bandoulière nightoutr",
        brand: "George Gina & Lucy",
        price: "139.00",
        image: "https://medias-cache.citadium.com/fr/george-gina-lucy-sac-a-bandouliere-noir/image/86/2/2991862.129.jpg"
    }
];

function Categories() {
    return (
        <section className="main-articles">
            <ul>
                {articles.map(article => {
                    return <SmallArticle article={article}/>
                })}
            </ul>
        </section>
    );
}

export default Categories;
