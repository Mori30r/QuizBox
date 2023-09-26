import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import FontStyles from "./styles/FontStyles";
import GlobalStyles from "./styles/GlobalStyles.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Provider store={store}>
                <FontStyles />
                <GlobalStyles />
                <App />
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
