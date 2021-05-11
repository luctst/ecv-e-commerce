import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact strict sensitive component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
