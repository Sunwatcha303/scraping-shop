import React from 'react';

const Button = ({ children, primary }) => {
    return (
        <button className={`button ${primary ? 'primary' : ''}`}>
            {children}
            <style jsx>{`
        .button {
          border-radius: 8px;
          font-weight: 700;
          padding: 11px 16px;
          cursor: pointer;
          border: none;
        }
        .primary {
          background-color: var(--primary, #295f98);
          color: #fff;
        }
        @media (max-width: 991px) {
          .button {
            white-space: normal;
          }
        }
      `}</style>
        </button>
    );
};

export default Button;