import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/GlobalStyles";

//  App Components
import { initializeFacebookAsync, loadFacebookSDK } from "./assets/util";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import InvalidProduct from "./components/Product/InvalidProduct";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    loadFacebookSDK(document, "script", "facebook-jssdk");
    initializeFacebookAsync();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/product">
          <Route path=":id" element={<Product />} />
          <Route path="invalidid" element={<InvalidProduct />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
