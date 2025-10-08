import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      
      const timer = setTimeout(() => {
        setLoading(false);
      }, 9000);

      return () => clearTimeout(timer);
    }, []);
  return (
    <>
      {loading ? (
        <Loader  />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
