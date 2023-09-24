import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FontStyles from "./styles/FontStyles";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <FontStyles />
            <GlobalStyles />
            <App />
        </Provider>
    </React.StrictMode>
);
