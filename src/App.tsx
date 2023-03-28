// ** React Imports
import { useState } from "react";

// ** Context Imports
import { AuthProvider } from "./context/AuthContext";

// ** Style Imports
import "./App.css";

// ** Custom Imports
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthProvider value={{ isAuthenticated, login, logout }}>
      <div className="App">
        {isAuthenticated ? (
          <Home />
        ) : (
          <Login onAuthentication={setIsAuthenticated} />
        )}
      </div>
    </AuthProvider>
  );
}

export default App;
