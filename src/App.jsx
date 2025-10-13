import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import SpecificProject from "./pages/SpecificProject";
import Project from "./pages/Project";
import Loader from "./components/Loader";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import { DataProvider } from "../context/Data";

function App() {
  return (
    <DataProvider>
      <SmoothScrollWrapper>
        <BrowserRouter>
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
    if (location.pathname === "/") {
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 9000);
      return () => clearTimeout(timeout);
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
