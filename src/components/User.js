import React, { useState } from 'react';
const User = ({ update, user }) => {
  const [userInput, setUserInput] = useState('');
  const [mode, setMode] = useState(false);
  const updating = (name) => {
    setMode(!mode);
    setUserInput(name);
  };
  return (
    <>
      {mode ? (
        <>
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />{' '}
          <button
            onClick={(e) => {
              update(user.id, userInput);
              setMode(!mode);
            }}>
            confirm
          </button>
        </>
      ) : (
        user.name
      )}
      <button onClick={() => updating(user.name)}>
        {mode ? 'Cancel' : 'Update'}
      </button>
    </>
  );
};

export default User;
