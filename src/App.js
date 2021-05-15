import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './assets/scss/style.scss'
import { TransitionGroup } from "react-transition-group";
// import { CSSTransition } from "react-transition-group";
import Layout from "./layouts/Layout";
import Home from './views/Home';
import Login from "./views/Login";
import Register from "./views/Register";
import Account from "./views/Account";
import Articles from "./views/Articles";
import Article from "./views/Article";
import ScrollToTop from "./components/ScrollToTop";
import CategoryCreate from "./views/CategoryCreate";
import CategoryEdit from "./views/CategoryEdit";
import ArticleCreate from "./views/ArticleCreate";
import ArticleEdit from "./views/ArticleEdit";


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
    { path: '/articles', name: 'Articles', Component: Articles },
    { path: '/articles/:id', name: 'Article', Component: Article },
    { path: '/article/creer', name: 'ArticleCreate', Component: ArticleCreate, checkRoute: createCheckRoute(true, '/connexion') },
    { path: '/article/modifier/:id', name: 'ArticleEdit', Component: ArticleEdit, checkRoute: createCheckRoute(true, '/connexion') },
    { path: '/categorie/creer', name: 'CategoryCreate', Component: CategoryCreate, checkRoute: createCheckRoute(true, '/connexion')},
    { path: '/categorie/modifier/:id', name: 'CategoryEdit', Component: CategoryEdit, checkRoute: createCheckRoute(true, '/connexion') },
];

function checkToken(Component, mustCheckToken, redirectPath, propsFromRoute) {
    if (mustCheckToken && localStorage.getItem('accessToken')) return <Component {...propsFromRoute} />
    if (!mustCheckToken && !localStorage.getItem('accessToken')) return <Component {...propsFromRoute} />

    return <Redirect to={redirectPath}></Redirect>
}

function App() {
    return (
        <Router>
            <Layout>
                <TransitionGroup>
                    <ScrollToTop/>
                    <Switch>
                        {routes.map(({ path, Component, checkRoute }) => (
                            <Route key={path} exact path={path} render={function (props) {
                                if (!checkRoute) return <Component { ...props }/>
                                return checkToken(Component, checkRoute.checkIfToken, checkRoute.redirectTo, props);
                            }}>
                            </Route>
                        ))}
                    </Switch>
                </TransitionGroup>
            </Layout>
        </Router>
    );
}

export default App;
