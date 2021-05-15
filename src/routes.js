import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import Account from "./views/Account";
import Articles from "./views/Articles";
import Article from "./views/Article";
import ArticleCreate from "./views/ArticleCreate";
import ArticleEdit from "./views/ArticleEdit";
import CategoryCreate from "./views/CategoryCreate";
import CategoryEdit from "./views/CategoryEdit";
import SearchResults from "./views/SearchResults";

function createCheckRoute (checkToken, pathToRedirect) {
    return {
        checkIfToken: checkToken,
        redirectTo: pathToRedirect
    }
}

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/inscription', name: 'Register', Component: Register },
    { path: '/connexion', name: 'Login', Component: Login, checkRoute: createCheckRoute(false, '/') },
    { path: '/mon-compte', name: 'Account', Component: Account, checkRoute: createCheckRoute(true, '/connexion') },
    { path: '/recherche/:terms', name: 'SearchResults', Component: SearchResults },
    { path: '/articles', name: 'Articles', Component: Articles },
    { path: '/articles/:id', name: 'Article', Component: Article },
    { path: '/article/creer', name: 'ArticleCreate', Component: ArticleCreate, checkRoute: createCheckRoute(true, '/connexion') },
    { path: '/article/modifier/:id', name: 'ArticleEdit', Component: ArticleEdit, checkRoute: createCheckRoute(true, '/connexion') },
    { path: '/categorie/creer', name: 'CategoryCreate', Component: CategoryCreate, checkRoute: createCheckRoute(true, '/connexion')},
    { path: '/categorie/modifier/:id', name: 'CategoryEdit', Component: CategoryEdit, checkRoute: createCheckRoute(true, '/connexion') },
];

export default routes;