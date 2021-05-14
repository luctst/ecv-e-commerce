import './style.scss';
import SmallArticle from "../SmallArticle";
import CategoriesRadio from "../CategoriesRadio";

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
    },
    {
        id: 5,
        handle: "dr-martens-en-cuir-black-smooth",
        title: "Dr. Martens en cuir black smooth",
        brand: "Dr. Martens",
        price: "160.00",
        image: "https://medias-cache.citadium.com/fr/dr-martens-dr-martens-en-cuir-noir/image/97/1/2919971.129.jpg"
    },
    {
        id: 6,
        handle: "tee-shirt-col-rond-regular-fit",
        title: "Tee-shirt col rond regular-fit",
        brand: "Tealer",
        price: "35.00",
        image: "https://medias-cache.citadium.com/fr/tealer-tee-shirt-col-rond-regular-fit-serigraphie-en-coton-blanc/image/74/0/3063740.129.jpg"
    },
    {
        id: 7,
        handle: "aop-milano-mini-skirt-jupe",
        title: "AOP Milano mini skirt jupe",
        brand: "Calvin Klein Jeans",
        price: "69.00",
        image: "https://medias-cache.citadium.com/fr/calvin-klein-jeans-jupe-blanc/image/46/9/2899469.426.jpg"
    },
    {
        id: 8,
        handle: "timeless-script-robe",
        title: "Timeless script robe",
        brand: "Tommy Jeans",
        price: "90.00",
        image: "https://medias-cache.citadium.com/fr/tommy-jeans-robe-rouge/image/38/7/2965387.426.jpg"
    },
    {
        id: 9,
        handle: "dress-mazzy-robe",
        title: "Dress mazzy robe",
        brand: "Wasted",
        price: "70.00",
        image: "https://medias-cache.citadium.com/fr/wasted-robe-noir/image/21/6/3011216.426.jpg"
    },
    {
        id: 10,
        handle: "campo-chromefree",
        title: "Campo chromefree",
        brand: "Veja",
        price: "125.00",
        image: "https://medias-cache.citadium.com/fr/veja-campo-chromefree-jaune/image/56/5/3063565.426.jpg"
    },
    {
        id: 11,
        handle: "ua-old-skool-tapared-basket",
        title: "Ua old skool tapared basket",
        brand: "Vans",
        price: "90.00",
        image: "https://medias-cache.citadium.com/image/97/8/3066978.426.jpg"
    }
];

function ArticlesList() {
    return (
        <section className="articles">
            <div className="head">
                <h1>Nos articles</h1>
                <form>
                    <CategoriesRadio/>
                </form>
            </div>
            <ul className="list">
                {articles.map((article, index) => {
                    return <SmallArticle key={`article-${index}`} article={article}/>
                })}
            </ul>
        </section>
    );
}

export default ArticlesList;
