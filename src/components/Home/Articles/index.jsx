import './style.scss';
import { Link } from "react-router-dom";
import more from "../../../assets/images/icons/plus.svg";
import LazyImage from '../../LazyImage';

function Articles() {
    return (
        <section className="home-articles">
            <ul>
                <li>
                    <Link to="/">
                        <LazyImage src="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/4.4d7a51ab.jpg" alt="Titre de l'article"/>
                        <span>20/01/2021</span>
                        <h2>Titre de l'article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?</p>
                        <img className="icon-more" src={more} alt="Voir l'article"/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <LazyImage src="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/2.f37e6130.jpg" alt="Titre de l'article"/>
                        <span>20/01/2021</span>                    <h2>Titre de l'article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?</p>
                        <img className="icon-more" src={more} alt="Voir l'article"/>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <LazyImage src="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/3.218f1329.jpg" alt="Titre de l'article"/>
                        <span>20/01/2021</span>
                        <h2>Titre de l'article</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?</p>
                        <img className="icon-more" src={more} alt="Voir l'article"/>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Articles;
