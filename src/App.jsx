import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Homepage from "./pages/Homepage";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
function App() {
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   const visitData = JSON.parse(localStorage.getItem("visitData"));
   const now = Date.now();
   const twoHours = 2 * 60 * 60 * 1000; 

   
   if (visitData && now - visitData.timestamp < twoHours) {
     setLoading(false);
   } else {
     
     const timer = setTimeout(() => {
       localStorage.setItem(
         "visitData",
         JSON.stringify({ hasVisited: true, timestamp: Date.now() })
       );
       setLoading(false);
     }, 4000); 
     return () => clearTimeout(timer);
   }
 }, []);
  return (
    <>
      {loading ? (
        <Loader />
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
