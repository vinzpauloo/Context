// ** React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// **  Components
import App from "./App";

// ** Style Imports
import "./index.css";

// ** Context Imports
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider value={{ isAuthenticated: false }}>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
