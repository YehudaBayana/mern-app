import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../customHooks/ContextProvider';

const Chat = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const { state, dispatch } = useContext(StoreContext);
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/messages')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'ADD_MESSAGES', payload: data });
        setMessage(state.messages);
      });
  }, []);

  const postMessage = () => {
    console.log(user.fullName);
    console.log(message);
    fetch('https://mern-jk.herokuapp.com/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: user.fullName,
        text: message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'ADD_MESSAGE', payload: data });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={window.innerWidth > 700 ? { marginRight: '280px' } : {}}>
      <h1>chat</h1>
      <h3>{state.rooms[state.activeRoomId].name}</h3>
      <input
        type='text'
        placeholder='message'
        onChange={(e) => setMessage(e.target.value)}
      />
      {state.messages.map((message) => {
        return (
          <p>
            <b>{message.from}: </b> {message.text}
          </p>
        );
      })}
      <button onClick={postMessage}>add message</button>
    </div>
  );
};

export default Chat;
