import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Project from './Project';
import Main from './Main';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="jadnasser/build/project_1">
          <Project name="project_1" />
        </Route>
        <Route path="jadnasser/build/project_2">
          <Project name="project_2" />
        </Route>
        <Route path="jadnasser/build/project_3">
          <Project name="project_3" />
        </Route>
        <Route path="jadnasser/build/project_4">
          <Project name="project_4" />
        </Route>
        <Route path="/services">
          <Main goTo="services" />
        </Route>
        <Route path="jadnasser/build/index.html/#about">
          <Main goTo="about" />
        </Route>
        <Route path="/work">
          <Main goTo="work" />
        </Route>
        <Route path="jadnasser/build/index.html">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
