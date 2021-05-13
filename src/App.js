import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './assets/scss/style.scss'
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import Layout from "./layouts/Layout";
import Home from './views/Home';
import Login from "./views/Login";
import Register from "./views/Register";
import Account from "./views/Account";
import Articles from "./views/Articles";
import Article from "./views/Article";

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/inscription', name: 'Register', Component: Register },
    { path: '/conexion', name: 'Login', Component: Login },
    { path: '/articles', name: 'Articles', Component: Articles },
    { path: '/articles/:id', name: 'Article', Component: Article },
    { path: '/mon-compte', name: 'Account', Component: Account },
];

function App() {
    return (
        <Router>
            <Layout>
                <TransitionGroup>
                    <Switch>
                        {routes.map(({ path, Component }) => (
                            <Route key={path} exact path={path}>
                                {({ match }) => (
                                    <CSSTransition
                                        in={match != null}
                                        timeout={300}
                                        classNames="page"
                                        unmountOnExit
                                    >
                                        <div className="page">
                                            <Component />
                                        </div>
                                    </CSSTransition>
                                )}
                            </Route>
                        ))}
                    </Switch>
                </TransitionGroup>
            </Layout>
        </Router>
    );
}

export default App;
