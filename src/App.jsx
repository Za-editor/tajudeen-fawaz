import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import SpecificProject from "./pages/SpecificProject";
import Project from "./pages/Project";
import Loader from "./components/Loader";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import { DataProvider } from "../context/Data";
import ScrollToTop from "./Utilities/ScrollToTop";

function App() {
  return (
    <DataProvider>
      <SmoothScrollWrapper>
        <BrowserRouter>
          <ScrollToTop />
          <AppContent />
        </BrowserRouter>
      </SmoothScrollWrapper>
    </DataProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const lastVisit = localStorage.getItem("homeVisitTimestamp");

    const tenMinutes = 10 * 60 * 1000;

    if (location.pathname === "/") {
      if (!lastVisit || now - parseInt(lastVisit) > tenMinutes) {
        setLoading(true);
        localStorage.setItem("homeVisitTimestamp", now.toString());

        const timeout = setTimeout(() => {
          setLoading(false);
        }, 9000);

        return () => clearTimeout(timeout);
      } else {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="projects" element={<Project />} />
            <Route path="projects/:name" element={<SpecificProject />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
