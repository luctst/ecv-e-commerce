import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import './assets/scss/style.scss'
import { TransitionGroup } from 'react-transition-group';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import routes from './routes';

function checkToken(Component, mustCheckToken, redirectPath, propsFromRoute) {
    const token = localStorage.getItem('accessToken');
    return (mustCheckToken && token) || (!mustCheckToken && !token) ? <Component {...propsFromRoute} /> : <Redirect to={redirectPath}/>
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
                                if (!checkRoute) return <Component { ...props }/>;
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
