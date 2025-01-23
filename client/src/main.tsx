import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import GoogleAuthProvider from "./lib/GoogleAuthProvider.tsx";
import ReactQueryProvider from "./lib/ReactQueryProvider.tsx";
import ToastProvider from "./lib/ToastProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleAuthProvider>
      <ReactQueryProvider>
        <ToastProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ToastProvider>
      </ReactQueryProvider>
    </GoogleAuthProvider>
  </StrictMode>
);
