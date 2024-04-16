import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";
import { ThemeProvider } from "@material-tailwind/react";
import { CategoryProvider } from "./Context/CategoryProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
);
