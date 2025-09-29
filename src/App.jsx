import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
