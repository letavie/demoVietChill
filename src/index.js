import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./components/GlobalStyles";
import { DataContext } from "./components/DataContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyles>
      <DataContext>
        <App />
      </DataContext>
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
