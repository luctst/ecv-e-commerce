import ArticleForm from "../components/ArticleForm";

const article = {
    id: 1,
    title: "Chemise à fleur",
    brand: "Levi's",
    price: "79.00",
    image: "https://medias-cache.citadium.com/fr/levis-chemise-bleu/image/35/8/3025358.426.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci asperiores beatae dignissimos distinctio facere magni mollitia nulla officiis.",
    category: 'chemise'
};

function ArticleEdit() {
    return (
        <div>
            <ArticleForm
                pageTitle="Modifier l'article"
                title={article.title}
                description={article.description}
                brand={article.brand}
                price={article.price}
                image={article.image}
                category={article.category}
                button="Modifier"
            />
        </div>
    )
}

export default ArticleEdit;