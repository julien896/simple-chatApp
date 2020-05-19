import React, { useState } from 'react';
import useChat from './useChat';
import './App.css';

function App() {

  const [message,setMessage] = useState('');
  const {error,loading,messages} = useChat();

  const setMessage = e => {
    e.preventDefault();

    db.collection('messages').add ({
      timestamp: Date.now(),
      message
    });
  }

  return (
    <div className="App">
      <div className="App-header">
      <p>Ingrese su mensaje ...</p>
      <form>
      <input value={message} onChange={e => setMessage(e.target.value)}/>
      <button type="submit" onClick={sendMessage}>Enviar Mensaje . </button>
      </form>
      <ul>
        {messages.map(e => setMessage(e.target.value))}
      </ul>
      </div>
    </div>
  );
}

export default App;
