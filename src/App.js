import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/project 1">
          <Project name="project 1" />
        </Route>
        <Route path="/project 2">
          <Project name="project 2" />
        </Route>
        <Route path="/project 3">
          <Project name="project 3" />
        </Route>
        <Route path="/project 4">
          <Project name="project 4" />
        </Route>
        <Route path="/services">
          <Main goTo="services" />
        </Route>
        <Route path="/about">
          <Main goTo="about" />
        </Route>
        <Route path="/work">
          <Main goTo="work" />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
