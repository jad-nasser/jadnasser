import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SunglassesOnlineStore from "./Project/SunglassesOnlineStore/SunglassesOnlineStore";
import FromExcelToRelationalDatabaseConverter from "./Project/FromExcelToRelationalDatabaseConverter/FromExcelToRelationalDatabaseConverter";
import FreeLibrary from "./Project/FreeLibrary/FreeLibrary";
import Main from "./Main";
import FreeImages from "./Project/FreeImages/FreeImages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/free-images">
          <FreeImages />
        </Route>
        <Route path="/free-library">
          <FreeLibrary />
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
