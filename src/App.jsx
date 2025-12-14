import { Route, Routes } from "react-router-dom";
import Menubar from "./Components/Menubar";
import Homepage from "./Pages/Homepage";
import ContactPage from "./Pages/ContactPage";
import { lazy, Suspense } from "react";
import Loading from "./Components/Loading";
import UICatalog from "./Pages/UICatalog";
import Exhibition from "./Pages/Exhibition";

const BuyBuyHomepage = lazy(() => import("./Projects/BuyBuyHomepage"));
const BuyBuyAdmin = lazy(() => import("./Projects/BuyBuyAdmin"));
const Schnapsen = lazy(() => import("./Projects/Schnapsen"));
const Mondatelier = lazy(() => import("./Projects/Mondatelier"));
const PortfolioProject = lazy(() => import("./Projects/PortfolioProject"));
const BandHomepage = lazy(() => import("./Projects/BandHomepage"));

export default function App() {
  return (
    <div>
      <Menubar />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route
            path="/projects/buybuy-homepage"
            element={<BuyBuyHomepage />}
          />
          <Route path="/projects/schnapsen" element={<Schnapsen />} />
          <Route path="/projects/buybuy-admin" element={<BuyBuyAdmin />} />
          <Route path="/projects/mondatelier" element={<Mondatelier />} />
          <Route path="/projects/portfolio" element={<PortfolioProject />} />
          <Route path="/projects/band-homepage" element={<BandHomepage />} />

          <Route path="/ui-catalog" element={<UICatalog />} />
          <Route path="/exhibitions" element={<Exhibition />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
