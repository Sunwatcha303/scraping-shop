import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import TabSet from './TabSet';
import ProductHistory from './ProductHistory';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';

const ProfilePage = () => {
  const [displayChat, setDisplayChat] = useState(false);
  const handleTabSet = (b) => {
    setDisplayChat(b)
  }
  return (
    <div className="profile-page">
      <main className="main-content">
        <ProfileInfo />
        <div className='main-container'>
          <TabSet setDisplayChat={handleTabSet} />
          {displayChat ? (
            <div className="chat-container">
              <ChatList />
              <ChatWindow />
            </div>
          ) : (<ProductHistory />)
          }
        </div>
      </main>
      <style >{`
        .main-container{
            padding: 0px 142px;
        }
        .chat-container {
          display: flex;
          width: 100%;
          max-width: 1104px;
          gap: 20px;
          max-height: 500px;
        }
          
        .profile-page {
          background-color: var(--white);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .main-content {
          padding: 24px 0;
        }
        .divider {
          border: none;
          border-top: 1px solid var(--secondary);
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default ProfilePage;