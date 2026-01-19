import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../auth/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      login(res.data.token);
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        {error && <p className="login-error">{error}</p>}

        <div className="demouser">
          <p style={{color:'black'}}>Demo credentials</p>
          <p>Username: mor_2314 and Password: 83r5^_ </p>
        </div>
      </form>
    </div>  
  );
};

export default Login;
