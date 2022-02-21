import { selector } from 'recoil';
import { usersState } from '../atoms/users.atom';

export const usersFetch = selector({
  key: 'usersFetch', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const users = get(usersState);

    return users;
  },
});
