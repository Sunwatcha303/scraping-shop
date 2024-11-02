import React, { useState, useEffect } from 'react';
import ProfileInfo from './ProfileInfo';
import TabSet from './TabSet';
import ProductHistory from './ProductHistory';
import ChatList from './ChatList';
import ChatWindow from './ChatWindow';
import { decodeToken } from '../util/util';
import Cookies from 'js-cookie'
const ProfilePage = () => {
  const [displayChat, setDisplayChat] = useState(false);
  const [username, setUsername] = useState(() => {
    const token = Cookies.get('token')
    const decoded = decodeToken(token)
    return decoded.username
  }
  )
  const [productData, setProductData] = useState([])

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/history/${username}`); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
        setProductData(data === null ? [] : data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchProductData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once on mount

  const handleTabSet = (b) => {
    setDisplayChat(b)
  }



  return (
    <div className="profile-page">
      <main className="main-content">
        <ProfileInfo username={username} />
        <div className='main-container'>
          <TabSet setDisplayChat={handleTabSet} />
          {displayChat ? (
            <div className="chat-container">
              <ChatList />
              <ChatWindow />
            </div>
          ) : (<ProductHistory productData={productData}/>)
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