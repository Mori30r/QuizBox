import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FontStyles from "./styles/FontStyles";
import GlobalStyles from "./styles/GlobalStyles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FontStyles />
        <GlobalStyles />
        <App />
    </React.StrictMode>
);
