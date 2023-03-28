// ** React Imports
import React, { useState, FormEvent } from "react";

interface LoginFormProps {
  onAuthentication: (isAuthenticated: boolean) => void;
}

const Login: React.FC<LoginFormProps> = ({ onAuthentication }) => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (username === "testuser" && password === "testpassword") {
      alert("Authenticated");
      onAuthentication(true);
    } else {
      alert("Authentication failed");
      onAuthentication(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
