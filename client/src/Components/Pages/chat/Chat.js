import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../customHooks/ContextProvider';

const Chat = () => {
  let user = JSON.parse(localStorage.getItem('user'));
  const { state, dispatch } = useContext(StoreContext);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://mern-jk.herokuapp.com/api/messages')
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'ADD_MESSAGES', payload: data });
        setMessage(state.messages);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
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
      <div style={{ height: '400px', width: '300px', overflow: 'auto' }}>
        {isLoading ? (
          <img
            src='https://www.essver.co.il/wp-content/plugins/ajaxify-wordpress-site-pro/images/configPageLoader.gif'
            alt=''
            width='100%'
          />
        ) : (
          state.messages.map((message) => {
            return (
              <p style={{ padding: '10px 20px', background: 'white' }}>
                <b>{message.from}: </b> {message.text}
              </p>
            );
          })
        )}
      </div>
      <input
        style={{ background: 'white' }}
        type='text'
        placeholder='message'
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={postMessage}>add message</button>
    </div>
  );
};

export default Chat;
