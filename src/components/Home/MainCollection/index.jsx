import './style.scss';
import LazyImage from "../../LazyImage";
import LinkButton from "../../LinkButton";

function MainCollection() {
    return (
        <section className="main-collection">
            <LazyImage src="https://medias-cache.printemps.com/image/10/6/3061106.jpg" alt="Voir nos dernières nouveautés"/>
            <LinkButton routeData="/articles"><h1>Découvrir nos articles</h1></LinkButton>
        </section>
    )
}

export default MainCollection;
