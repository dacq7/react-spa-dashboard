import { Link } from "react-router-dom";
import { useUsers } from "../hooks/useUsers";

const Dashboard = () => {
  const { users, loading } = useUsers();

  if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>Dashboard</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;

