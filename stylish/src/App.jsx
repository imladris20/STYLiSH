import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import { Route, Routes } from "react-router-dom";
import InvalidProduct from "./components/Product/InvalidProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/product">
          {/* <Route index  element={<Product />} /> */}
          <Route path=":id" element={<Product />} />
          <Route path="invalidid" element={<InvalidProduct />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
