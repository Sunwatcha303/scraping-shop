import React from 'react';

const Button = ({ text, primary }) => {
    return (
        <button className={`btn ${primary ? 'btn-primary' : ''}`}>
            {text}
            <style >{`
        .btn {
          align-self: stretch;
          border-radius: 8px;
          min-height: 42px;
          font-weight: 700;
          padding: 11px 16px;
          border: none;
          cursor: pointer;
        }
        .btn-primary {
          background-color: var(--primary, #295f98);
          color: #fff;
        }
        @media (max-width: 991px) {
          .btn {
            white-space: normal;
          }
        }
      `}</style>
        </button>
    );
};

export default Button;