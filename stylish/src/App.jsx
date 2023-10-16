import { GlobalStyle } from "./assets/GlobalStyles";
import { Route, Routes } from "react-router-dom";

//  App Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import NotFound from "./components/NotFound";
import InvalidProduct from "./components/Product/InvalidProduct";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/product">
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
