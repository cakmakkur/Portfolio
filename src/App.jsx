import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Menubar from "./Components/Menubar";
import ContactPage from "./Pages/ContactPage";
import { lazy, Suspense } from "react";
import Loading from "./Components/Loading";
import UICatalog from "./Pages/UICatalog";
import Exhibition from "./Pages/Exhibition";
import Paintings from "./Pages/Paintings";

const Schnapsen = lazy(() => import("./Projects/Schnapsen"));
const Mondatelier = lazy(() => import("./Projects/Mondatelier"));
const BugnBass = lazy(() => import("./Projects/BugnBass"));
const PrimalDomainsSimulator = lazy(
  () => import("./Projects/PrimalDomainsSimulator")
);
const PortfolioProject = lazy(() => import("./Projects/PortfolioProject"));
const BandHomepage = lazy(() => import("./Projects/BandHomepage"));

export default function App() {
  return (
    <BrowserRouter>
      <Menubar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/projects/schnapsen" element={<Schnapsen />} />
          <Route path="/projects/bugnbass" element={<BugnBass />} />
          <Route
            path="/projects/primal-domains-simulator"
            element={<PrimalDomainsSimulator />}
          />
          <Route path="/projects/mondatelier" element={<Mondatelier />} />
          <Route path="/projects/portfolio" element={<PortfolioProject />} />
          <Route path="/projects/band-homepage" element={<BandHomepage />} />

          <Route path="/ui-catalog" element={<UICatalog />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bg" element={<Paintings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
