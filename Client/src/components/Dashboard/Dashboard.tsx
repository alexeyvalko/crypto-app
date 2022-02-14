import { Box, SkeletonText } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedUseSelector } from "../../hooks/useTypedUseSelector";

export const Dashboard: FC = () => {
  const { loading, users, error } = useTypedUseSelector((state) => state.users);
  const { fetchUsers } = useActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return (
      <Box w="20"><SkeletonText mt='4' noOfLines={4} spacing='4' /></Box>
    );
  }

  if (error !== null) {
    return <div>{error}</div>;
  }
  return (
    <div>
      {users.map((user) => (
        <p key={user.username}>{user.name}</p>
      ))}
       {users.map((user) => (
        <p key={user.username}>{user.name}</p>
      ))}
       {users.map((user) => (
        <p key={user.username}>{user.name}</p>
      ))}
       {users.map((user) => (
        <p key={user.username}>{user.name}</p>
      ))}
      
    </div>
  );
};
