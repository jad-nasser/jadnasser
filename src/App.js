import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Project from "./Project";
import SunglassesOnlineStore from "./Project/SunglassesOnlineStore/SunglassesOnlineStore";
import FromExcelToRelationalDatabaseConverter from "./Project/FromExcelToRelationalDatabaseConverter/FromExcelToRelationalDatabaseConverter";
import Main from "./Main";

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
        <Route path="/sunglasses-online-store">
          <SunglassesOnlineStore />
        </Route>
        <Route path="/from-excel-to-relational-database-converter">
          <FromExcelToRelationalDatabaseConverter />
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
        <Route path="/contact">
          <Main goTo="contact" />
        </Route>
        <Route path="/home">
          <Main goTo="home" />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
