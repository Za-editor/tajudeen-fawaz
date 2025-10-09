import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import SmoothScrollWrapper from "./components/SmoothScrollWrapper";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 9000);

      return () => clearTimeout(timeout);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SmoothScrollWrapper>
          {" "}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Homepage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </SmoothScrollWrapper>
      )}
    </>
  );
}

export default App;
