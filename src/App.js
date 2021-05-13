import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import './assets/scss/style.scss'
import Home from './views/Home';
import Layout from "./layouts/Layout";

function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" exact strict sensitive component={Home}/>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
