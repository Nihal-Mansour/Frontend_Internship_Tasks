import './App.scss';
import GridCard from "../src/components/GridCard";
import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import CardPage from './components/CardPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <MainCard />
              <GridCard />
            </Route>
            <Route path="/cardPage">
              <CardPage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
