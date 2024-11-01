import React from 'react';

const TabSet = () => {
    return (
        <nav className="tabs-set">
            <div className="tab active">
                <span>Personal</span>
                <div className="tab-indicator" />
            </div>
            <div className="tab">Shop</div>
            <style>{`
        .tabs-set {
          display: flex;
          align-items: flex-start;
          gap: 32px;
          font-size: 20px;
          font-weight: 700;
        }
        .tab {
          display: flex;
          min-height: 38px;
          flex-direction: column;
          justify-content: flex-start;
          width: 83px;
          color: var(--Grays-Gray, #8e8e93);
        }
        .tab.active {
          color: #000;
        }
        .tab-indicator {
          border-radius: 8px;
          background-color: var(--primary, #295f98);
          min-height: 2px;
          margin-top: 4px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .tabs-set,
          .tab {
            white-space: normal;
          }
        }
      `}</style>
        </nav>
    );
};

export default TabSet;