import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product"
import NotFound from "./components/NotFound"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path='*' element={<NotFound />}  />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
