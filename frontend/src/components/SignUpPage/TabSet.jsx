import React from 'react';

const TabSet = ({ setDisplayAdmin }) => {
  return (
    <nav className="tab-set">
      <ul className="tab-list">
        <li className="tab-item">
          <a className="tab-link" onClick={() => setDisplayAdmin(false)}>ผู้ใช้</a>
        </li>
        <li className="tab-item">
          <a className="tab-link" onClick={() => setDisplayAdmin(true)}>แอดมิน</a>
        </li>
      </ul>
      <style>{`
        .tab-list {
          display: flex;
          list-style-type: none;
          padding: 0;
          gap: 32px;
          cursor: pointer;
        }
        .tab-link {
          color: var(--gray);
          font-size: 20px;
          font-weight: 700;
          text-decoration: none;
        }
        .tab-item:hover .tab-link {
          color: var(--primary);
        }
        .tab-item.active::after {
          content: '';
          display: block;
          height: 2px;
          background-color: var(--primary);
          margin-top: 4px;
        }
        @media (max-width: 991px) {
          .tab-set {
            margin-left: 10px;
          }
        }
      `}</style>
    </nav>
  );
};

export default TabSet;