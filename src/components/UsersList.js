import React from 'react';
import { useRecoilValue } from 'recoil';
import { usersFetch } from '../selectors/users.selector';

const UsersList = () => {
  const users = useRecoilValue(usersFetch);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UsersList;
