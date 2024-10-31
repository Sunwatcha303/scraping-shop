import React from 'react';

const CheckboxField = ({ label }) => {
    return (
        <div className="checkbox-field">
            <input type="checkbox" id="agreeTerms" className="checkbox" />
            <label htmlFor="agreeTerms" className="label">{label}</label>
            <style jsx>{`
        .checkbox-field {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #000;
          font-weight: 400;
          margin-top: 20px;
        }
        .checkbox {
          appearance: none;
          border-radius: 8px;
          border: 1px solid var(--Grays-Gray, #8e8e93);
          width: 30px;
          height: 30px;
          cursor: pointer;
        }
        .checkbox:checked {
          background-color: var(--primary, #295f98);
          border-color: var(--primary, #295f98);
        }
        .label {
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default CheckboxField;