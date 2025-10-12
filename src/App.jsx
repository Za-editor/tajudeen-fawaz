import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
import SpecificProject from "./pages/SpecificProject";
import Project from "./pages/Project";
import { DataProvider } from "../context/Data";
function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const handlePageLoad = () => {
  //     const timeout = setTimeout(() => {
  //       setLoading(false);
  //     }, 9000);

  //     return () => clearTimeout(timeout);
  //   };

  //   if (document.readyState === "complete") {
  //     handlePageLoad();
  //   } else {
  //     window.addEventListener("load", handlePageLoad);
  //   }

  //   return () => window.removeEventListener("load", handlePageLoad);
  // }, []);
  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : ( */}
        <DataProvider>
          <SmoothScrollWrapper>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Homepage />} />
                  <Route path="project/:name" element={<SpecificProject />} />
                  <Route path="project" element={<Project />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SmoothScrollWrapper>
        </DataProvider>
      )}
    </>
  );
}

export default App;
