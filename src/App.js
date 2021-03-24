import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/MyNav";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Route path="/" exact  component={MyNav} />
    </Router>
  );
}

export default App;
