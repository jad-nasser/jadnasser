import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project';
import Main from './Main';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/project_1">
          <Project name="project 1" />
        </Route>
        <Route path="/project_2">
          <Project name="project 2" />
        </Route>
        <Route path="/project_3">
          <Project name="project 3" />
        </Route>
        <Route path="/project_4">
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
