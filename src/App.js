import "./App.css";
import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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
        <Routes>
          <Route path="/free-images" element={<FreeImages />} />
          <Route path="/free-library" element={<FreeLibrary />} />
          <Route
            path="/sunglasses-online-store"
            element={<SunglassesOnlineStore />}
          />
          <Route
            path="/from-excel-to-relational-database-converter"
            element={<FromExcelToRelationalDatabaseConverter />}
          />
          <Route path="/services" element={<Main goTo="services" />} />
          <Route path="/about" element={<Main goTo="about" />} />
          <Route path="/work" element={<Main goTo="work" />} />
          <Route path="/contact" element={<Main goTo="contact" />} />
          <Route path="/home" element={<Main goTo="home" />} />
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </Suspense>
  );
}
export default App;
