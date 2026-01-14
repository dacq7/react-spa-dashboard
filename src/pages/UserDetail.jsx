import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address?.city}</p>

      <Link to="/dashboard">
        <button>Back to Dashboard</button>
      </Link>
    </div>
  );
};

export default UserDetail;

