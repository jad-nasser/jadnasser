import "./App.css";
import { Suspense, lazy } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Main";

const SunglassesOnlineStore = lazy(() =>
  import("./Project/SunglassesOnlineStore/SunglassesOnlineStore")
);
const FromExcelToRelationalDatabaseConverter = lazy(() =>
  import(
    "./Project/FromExcelToRelationalDatabaseConverter/FromExcelToRelationalDatabaseConverter"
  )
);
const FreeLibrary = lazy(() => import("./Project/FreeLibrary/FreeLibrary"));
const FreeImages = lazy(() => import("./Project/FreeImages/FreeImages"));

function App() {
  return (
    <Suspense fallback={<div></div>}>
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
    </Suspense>
  );
}
export default App;
