import { FC, useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedUseSelector } from "../hooks/useTypedUseSelector";

export const Dashboard: FC = () => {
  const { loading, users, error } = useTypedUseSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.map((user) => (
        <p key={user.username}>{user.name}</p>
      ))}
    </div>
  );
};
