// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [userInput, setUserInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/chat', {
        userInput,
      });

      setResponses(prevResponses => [
        ...prevResponses,
        { type: 'User', content: userInput },
        { type: 'AI', content: response.data },
      ]);
      setUserInput('');
    } catch (error) {
      console.error('Error submitting user input:', error.message);
    }
  };

  return (
    <> 
    <div className='Name'>AI Chat Bot</div>
    <div className="App">
      <div className="chat-container">
        <h3 style={{color:"white"}}>Chat</h3>
        {responses.map((message, index) => (
          <div key={index} className={`message ${message.type}`}>
            {`${message.type} : ${message.content}`}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div></>
  );
}

export default App;
