import React from 'react';

const UserProfile = ({shop}) => {
    return (
        <section className="user-profile">
            <div className='cover'></div>
            <div className="profile-container">
                <div className="avatar"></div>
                <div className="user-info">
                    <h2 className="username">@{shop.shop_name}</h2>
                    <button className="message-btn">ส่งข้อความ</button>
                </div>
            </div>
            <style >{`
        .cover {
            min-height: 238px;
            background-color: #E1D7C6;
            width: 100%; /* Expand cover to full width */
        }
        .user-profile {
            width: 100%; /* Full screen width */
            box-sizing: border-box;
        }
        .profile-container {
            display: flex;
            gap: 20px;
            margin-top: -84px;
            align-items: center;
            justify-content: start;
            flex-wrap: wrap; /* Wrap items for responsiveness */
        }
        .avatar {
            background-color: var(--primary, #295f98);
            border-radius: 50%;
            width: 185px;
            height: 185px;
        }
        .user-info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-family: Anuphan, sans-serif;
            font-weight: 700;
            text-align: center;
        }
        .username {
            color: #000;
            font-size: 36px;
            margin: 0 0 10px;
        }
        .message-btn {
            align-self: center;
            border-radius: 8px;
            background: var(--primary, #295f98);
            min-height: 42px;
            font-size: 16px;
            color: #fff;
            padding: 11px 13px;
            border: none;
            cursor: pointer;
        }
        .divider {
            margin-top: 23px;
            width: 100%;
            border: 1px solid rgba(0, 0, 0, 1);
        }
        @media (max-width: 991px) {
          .profile-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
        </section>
    );
};

export default UserProfile;
