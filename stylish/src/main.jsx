import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { InputProvider } from "./context/InputContext.jsx";
import { UserProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
