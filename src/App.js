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

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/inscription', name: 'Register', Component: Register },
    { path: '/connexion', name: 'Login', Component: Login },
    { path: '/mon-compte', name: 'Account', Component: Account, checkRoute: { checkIfToken: true, redirectTo: '/connexion'} },
    { path: '/articles', name: 'Articles', Component: Articles },
    { path: '/articles/:id', name: 'Article', Component: Article },
    { path: '/article/creer', name: 'ArticleCreate', Component: ArticleCreate },
    { path: '/article/modifier/:id', name: 'ArticleEdit', Component: ArticleEdit },
    { path: '/categorie/creer', name: 'CategoryCreate', Component: CategoryCreate },
    { path: '/categorie/modifier/:id', name: 'CategoryEdit', Component: CategoryEdit },
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
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path} component={Component}>
                            </Route>
                        ))}
                    </Switch>
                </TransitionGroup>
            </Layout>
        </Router>
    );
}

export default App;
