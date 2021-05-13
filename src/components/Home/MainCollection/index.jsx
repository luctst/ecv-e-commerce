import './style.scss';
import LazyImage from "../../LazyImage";
import LinkButton from "../../LinkButton";

function MainCollection() {
    return (
        <section className="main-collection">
            <LazyImage src="https://medias-cache.printemps.com/image/10/6/3061106.jpg" alt="Voir nos dernières nouveautés"/>
            <LinkButton link="/articles">Découvrir nos articles</LinkButton>
        </section>
    );
}

export default MainCollection;
