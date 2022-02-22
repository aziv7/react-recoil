import React from 'react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { usersState } from '../atoms/users.atom';

const UserForm = () => {
  const [users, setUsers] = useRecoilState(usersState);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setUsers([
      {
        id: new Date().getTime(),
        name,
      },
      ...users,
    ]);

    setName('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type='submit' value='submit' />
    </form>
  );
};

export default UserForm;
