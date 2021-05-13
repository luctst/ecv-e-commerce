import './style.scss';
import SmallArticle from "../SmallArticle";

function ArticlesList() {
    return (
        <section className="articles">
            <div className="head">
                <h1>Les articles</h1>
                <form>
                    <label><input type="radio" value="all" defaultChecked name="category"/><span>Toute l'actualité</span></label>
                    <label><input type="radio" value="Mode" name="category"/><span>Mode</span></label>
                    <label><input type="radio" value="Cinéma" name="category"/><span>Cinéma</span></label>
                    <label><input type="radio" value="International" name="category"/><span>International</span></label>
                    <label><input type="radio" value="Musique" name="category"/><span>Musique</span></label>
                    <label><input type="radio" value="Economie" name="category"/><span>Economie</span></label>
                    <label><input type="radio" value="Web" name="category"/><span>Web</span></label>
                    <label><input type="radio" value="Cuisine" name="category"/><span>Cuisine</span></label>
                </form>
            </div>
            <ul className="list">
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://streetartnews.net/wp-content/themes/contemporaryartnews/assets/images/4.4d7a51ab.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://theculturetrip.com/wp-content/uploads/2018/11/d2f7ec.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://www.museum-bordeaux.fr/sites/BOR-MUSEUM-DRUPAL/files/2020-05/La%20place%20de%20l%27homme%20dans%20la%20nature%20au%20Mus%C3%A9um%20de%20Bordeaux%20-%20sciences%20et%20nature%20%282%29_6.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://blog.action-sejours.com/wp-content/uploads/2018/01/Les-10-choses-a-savoir-sur-Londres-avant-votre-sejour-1.jpg" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://file1.grazia.fr/var/grazia/storage/images/1/2/6/6/4/12664127/fashion-week-new-york-toutes-les-tendances-reperees-sur-les-defiles-printemps-ete-2021.jpeg?alias=original" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
                <SmallArticle title="Titre de l'article" date="20/01/2021" image="https://www.benoit-paris.com/sites/default/files/styles/slider_bg/public/page-bg/salle_benoit_paris2_0.jpg?itok=v81K0JP8" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem commodi consectetur dolores est illum, ipsum maiores obcaecati placeat possimus quod, saepe, velit! Consequuntur dolorem excepturi fugit nulla quos?"/>
            </ul>
        </section>
    );
}

export default ArticlesList;
