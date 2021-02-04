import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import JobPost from "./components/JobPost"
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';
import Favourites from "./components/Favourites"

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Route path="/" exact  component={MyNav} />
      <Route path="/favourites" exact component={Favourites} />
    </Router>
  );
}

export default App;
