import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { useAuth } from "../auth/AuthContext";
import "./Dashboard.css";

const Dashboard = () => {
  const { logout } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setError("");
    setLoading(true);
    try {
      const res = await axiosInstance.get("/users");
      setUsers(res.data);
    } catch {
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {loading && <Loader />}
      {error && <Error message={error} onRetry={fetchUsers} />}

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <p>
              <strong>{user.name}</strong>
            </p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
