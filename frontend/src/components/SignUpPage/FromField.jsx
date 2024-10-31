import React from 'react';

const FormField = ({ label, placeholder }) => {
    return (
        <div className="form-field">
            <label className="label">{label}</label>
            <input type="text" className="input" placeholder={placeholder} aria-label={label} />
            <style jsx>{`
        .form-field {
          display: flex;
          width: 100%;
          flex-direction: column;
          margin-bottom: 46px;
        }
        .label {
          color: #000;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .input {
          border-radius: 8px;
          border: 1px solid var(--Grays-Gray, #8e8e93);
          color: var(--Grays-Gray, #8e8e93);
          font-weight: 400;
          padding: 11px 15px;
          width: 100%;
        }
        @media (max-width: 991px) {
          .form-field {
            margin-bottom: 40px;
          }
          .input {
            padding-right: 20px;
          }
        }
      `}</style>
        </div>
    );
};

export default FormField;