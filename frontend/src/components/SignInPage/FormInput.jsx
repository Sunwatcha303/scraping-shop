import React from 'react';

const FormInput = ({ label, placeholder, value, setValue }) => {
    const id = label.toLowerCase().replace(' ', '-');
    return (
        <div className="form-input">
            <label htmlFor={id} className="input-label">{label}</label>
            <input
                type={label.toLowerCase() === 'password' ? 'password' : 'text'}
                id={id}
                className="input-field"
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)} // Fixed arrow function syntax
            />
            <style >{`
        .form-input {
          display: flex;
          width: 100%;
          flex-direction: column;
          margin-bottom: 46px;
        }
        .input-label {
          color: #000;
          font-weight: 700;
          align-self: flex-start;
          margin-bottom: 8px;
        }
        .input-field {
          border-radius: 8px;
          border: 1px solid var(--Grays-Gray, #8e8e93);
          color: var(--Grays-Gray, #8e8e93);
          font-weight: 400;
          padding: 11px 15px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .form-input {
            margin-bottom: 40px;
          }
          .input-field {
            padding-right: 20px;
          }
        }
      `}</style>
        </div>
    );
};

export default FormInput;