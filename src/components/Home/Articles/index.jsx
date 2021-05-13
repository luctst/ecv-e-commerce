import './style.scss';
import Categories from "../Categories";
import SmallArticle from "../../SmallArticle";

function Articles() {
    return (
        <section className="home-articles">
            <ul className="home-articles__list">
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/4.4d7a51ab.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://theculturetrip.com/wp-content/uploads/2018/11/d2f7ec.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://www.museum-bordeaux.fr/sites/BOR-MUSEUM-DRUPAL/files/2020-05/La%20place%20de%20l%27homme%20dans%20la%20nature%20au%20Mus%C3%A9um%20de%20Bordeaux%20-%20sciences%20et%20nature%20%282%29_6.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
            </ul>
            <Categories/>
        </section>
    );
}

export default Articles;
