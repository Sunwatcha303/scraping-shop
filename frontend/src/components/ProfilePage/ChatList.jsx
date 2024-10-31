import React from 'react';

const chatData = [
    { id: 1, shopName: "@shop's name", lastMessage: "ข้อความล่าสุด", date: "27/10/2567" },
    { id: 2, shopName: "@shop's name", lastMessage: "ข้อความล่าสุด", date: "27/10/2567" },
    { id: 3, shopName: "@shop's name", lastMessage: "ข้อความล่าสุด", date: "27/10/2567" },
    { id: 4, shopName: "@shop's name", lastMessage: "ข้อความล่าสุด", date: "27/10/2567" },
    { id: 5, shopName: "@shop's name", lastMessage: "ข้อความล่าสุด", date: "27/10/2567" },
];

const ChatList = () => {
    return (
        <aside className="chat-list">
            <ul className="chat-items">
                {chatData.map((chat) => (
                    <li key={chat.id} className="chat-item">
                        <div className="shop-avatar-list" />
                        <div className="chat-info">
                            <h3 className="shop-name">{chat.shopName}</h3>
                            <p className="last-message">{chat.lastMessage}</p>
                        </div>
                        <time className="chat-date">{chat.date}</time>
                    </li>
                ))}
            </ul>
            <style jsx>{`
        .chat-list {
          width: 45%;
          overflow-y: auto;
        }
        .chat-items {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .chat-item {
          display: flex;
          align-items: center;
          gap: 23px;
          padding: 8px;
          margin-bottom: 11px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          margin: 12px 0px;
        }
        .shop-avatar-list {
          background-color: var(--primary, #295f98);
          border-radius: 50%;
          width: 101px;
          height: 101px;
        }
        .chat-info {
          flex-grow: 1;
        }
        .shop-name {
          font-family: Anuphan, sans-serif;
          font-size: 20px;
          font-weight: 700;
          margin: 0;
        }
        .last-message {
          font-family: Anuphan, sans-serif;
          font-size: 16px;
          font-weight: 400;
          margin: 4px 0 0;
        }
        .chat-date {
          font-family: Anuphan, sans-serif;
          font-size: 16px;
          font-weight: 400;
        }
        @media (max-width: 991px) {
          .chat-list {
            width: 100%;
          }
        }
      `}</style>
        </aside>
    );
};

export default ChatList;