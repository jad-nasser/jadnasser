import "./App.css";
import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

const Main = lazy(() => import("./Main"));
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
const Footer = lazy(() => import("./Footer/Footer"));

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
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
      <Footer />
    </Suspense>
  );
}
export default App;
