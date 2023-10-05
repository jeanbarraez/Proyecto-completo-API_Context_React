import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import PhotosContextProvider from "./context/PhotosContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
    <PhotosContextProvider>
      <App />
    </PhotosContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
