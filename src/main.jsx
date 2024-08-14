import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/app/main.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./GlobalContext/ThemeContext";
import { LanguageContextProvider } from "./GlobalContext/LanguageContext.tsx";
import { ScrollContextProvider } from "./GlobalContext/ScrollPositionsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeContextProvider>
        <ScrollContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ScrollContextProvider>
      </ThemeContextProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);
