import React from 'react';

const ProfileInfo = () => {
    return (
        <section className="profile-info">
            <div className="profile-avatar"></div>
            <h2 className="username">@username</h2>
            <style jsx>{`
        .profile-info {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          margin-bottom: 21px;
        }
        .profile-avatar {
          background-color: var(--secondary);
          border-radius: 50%;
          width: 185px;
          height: 185px;
        }
        .username {
          color: #000;
          font-size: 36px;
          margin-top: 20px;
        }
      `}</style>
        </section>
    );
};

export default ProfileInfo;