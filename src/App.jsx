import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

import HouseContextProvider from "./components/HouseContext";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <HouseContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
          </Routes>
        </Layout>
      </HouseContextProvider>
    </div>
  );
}

export default App;
