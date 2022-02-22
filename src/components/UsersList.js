import { useRecoilState, useRecoilValue } from 'recoil';
import { usersState } from '../atoms/users.atom';
import { usersFetch } from '../selectors/users.selector';
import User from './User';

const UsersList = () => {
  const users = useRecoilValue(usersFetch);

  const [, setUsers] = useRecoilState(usersState);

  const remove = (id) => {
    setUsers([...users.filter((user) => user.id !== id)]);
  };

  const update = (id, value) => {
    const usrs = [];

    users.map((user) => {
      if (user.id === id) usrs.push({ name: value, id: user.id });
      else usrs.push(user);
    });
    setUsers(usrs);
  };

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <User user={user} update={update} />
          <button onClick={(e) => remove(user.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
