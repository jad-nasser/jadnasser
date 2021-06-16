import './App.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/project-1">
          <Project name="project_1" />
        </Route>
        <Route path="/project-2">
          <Project name="project_2" />
        </Route>
        <Route path="/project-3">
          <Project name="project_3" />
        </Route>
        <Route path="/project-4">
          <Project name="project_4" />
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
