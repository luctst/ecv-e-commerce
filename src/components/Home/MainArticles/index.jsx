import './style.scss';
import SmallArticle from "../../SmallArticle";

function Categories() {
    return (
        <section className="main-articles">
            <ul>
                <SmallArticle id="1" title="Chemmise à fleur" brand="Levi's" price="79.00" image="https://medias-cache.citadium.com/fr/levis-chemise-bleu/image/35/8/3025358.426.jpg"/>
                <SmallArticle id="2" title="Sweat oversize" brand="Levi's" price="75.00" image="https://medias-cache.citadium.com/fr/levis-sweat-blanc/image/36/0/3025360.426.jpg"/>
                <SmallArticle id="2" title="Coupe-vent imperméable avec capuche olive" brand="Rains" price="95.00" image="https://medias-cache.citadium.com/fr/rains-coupe-vent-impermeable-avec-capuche-vert/image/98/6/2992986.129.jpg"/>
                <SmallArticle id="2" title="Sac à bandoulière nightout" brand="George Gina & Lucy" price="139.00" image="https://medias-cache.citadium.com/fr/george-gina-lucy-sac-a-bandouliere-noir/image/86/2/2991862.129.jpg"/>
            </ul>
        </section>
    );
}

export default Categories;
