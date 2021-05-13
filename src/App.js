import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './assets/scss/style.scss'
import Home from './views/Home';
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import Layout from "./layouts/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact strict sensitive component={Home}/>
                    <Route path="/inscription" exact strict sensitive component={Register}/>
                    <Route path="/connexion" exact strict sensitive component={Login}/>
                    <Route path="/mon-compte" exact strict sensitive component={Profile}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
