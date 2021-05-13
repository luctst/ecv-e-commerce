import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './assets/scss/style.scss'
import Layout from "./layouts/Layout";
import Home from './views/Home';
import Login from "./views/Login";
import Register from "./views/Register";
import Account from "./views/Account";
import Articles from "./views/Articles";
import Article from "./views/Article";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact strict sensitive component={Home}/>
                    <Route path="/inscription" exact strict sensitive component={Register}/>
                    <Route path="/connexion" exact strict sensitive component={Login}/>
                    <Route path="/mon-compte" exact strict sensitive component={Account}/>
                    <Route path="/articles" exact strict sensitive component={Articles}/>
                    <Route path="/article/:id" exact strict sensitive component={Article}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
