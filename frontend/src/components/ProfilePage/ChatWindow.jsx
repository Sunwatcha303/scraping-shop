import React from 'react';

const ChatWindow = () => {
  const messages = [
    { id: 1, sender: 'user', text: 'สวัสดี' },
    { id: 2, sender: 'shop', text: 'นี่คือข้อความที่พูดคุยกันระหว่างซื้อขาย' },
    { id: 3, sender: 'shop', text: 'นี่คือข้อความที่พูดคุยกันระหว่างซื้อขาย' },
    { id: 4, sender: 'user', text: 'สวัสดี' },
    { id: 5, sender: 'shop', text: 'นี่คือข้อความที่พูดคุยกันระหว่างซื้อขาย' },
    { id: 6, sender: 'user', text: 'สวัสดี' },
    { id: 6, sender: 'user', text: 'สวัสดี' },
    { id: 6, sender: 'user', text: 'สวัสดี' },
    { id: 6, sender: 'user', text: 'สวัสดี' },
    { id: 6, sender: 'user', text: 'สวัสดี' },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <section className="chat-window">
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className="avatar" aria-hidden="true"></div>
            <p className="message-text">{message.text}</p>
          </div>
        ))}
      </div>
      <form className="message-form">
        <label htmlFor="messageInput" className="visually-hidden">Type message</label>
        <input type="text" id="messageInput" className="message-input" placeholder="Type message" />
        <button type="submit" className="send-button" onClick={handleSubmit}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/acf2b5fd57ed97ef68fc2778c1fce7e5a5cd0eeedb9bc4b505c42d7fd8f227d1?placeholderIfAbsent=true&apiKey=995f48d45d994fa1bbe8730e0edd02c1" alt="Send message" className="send-icon" />
        </button>
      </form>
      <style >{`
        .chat-window {
          width: 59%;
          display: flex;
          flex-direction: column;
          padding: 24px;
          font-family: Anuphan, sans-serif;
          overflow-y: auto;
        }
        .messages {
          flex-grow: 1;
          overflow-y: auto;
        }
        .message {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        .message.user {
          flex-direction: row-reverse;
        }
        .avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin: 0 12px;
        }
        .message.shop .avatar {
          background-color: #295f98;
        }
        .message.user .avatar {
          background-color: #cdc2a5;
        }
        .message-text {
          background-color: #d9d9d9;
          border-radius: 16px;
          padding: 8px 16px;
          margin: 0;
          max-width: 70%;
        }
        .message-form {
          display: flex;
          align-items: center;
          background-color: #fff;
          border-radius: 36px;
          padding: 9px 25px;
        }
        .message-input {
          flex-grow: 1;
          border: none;
          font-size: 20px;
          color: #8e8e93;
          outline: none;
        }
        .send-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .send-icon {
          width: 48px;
          height: 41px;
          object-fit: contain;
        }
        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        @media (max-width: 991px) {
          .chat-window {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ChatWindow;