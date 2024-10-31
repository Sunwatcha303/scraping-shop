import React, { useState } from 'react';
import TabSet from './TabSet';
import FormField from './FromField';
import CheckboxField from './CheckboxField';
import Button from './Button';

const SignUpPage = () => {
    const formFields = [
        { label: 'Email', placeholder: 'Enter email.' },
        { label: 'Username', placeholder: 'Enter username.' },
        { label: 'Password', placeholder: 'Enter password.' },
        { label: 'Confirm Password', placeholder: 'Enter confirm password.' },
    ];

    const [displayAdmin, setDisplayAdmin] = useState(false);

    return (
        <main className="sign-up-personal">
            <section className="sign-up-container">
                <h1 className="sign-up-title">Sign-up</h1>
                <TabSet setDisplayAdmin={setDisplayAdmin}/>
                <form className="sign-up-form">
                    {formFields.map((field, index) => (
                        <FormField key={index} label={field.label} placeholder={field.placeholder} />
                    ))}
                    <CheckboxField label="I agree to the term." />
                </form>
                <div className="action-container">
                    <Button primary>Sign-up</Button>
                    <a href="#" className="sign-in-link">sign-in</a>
                </div>
            </section>
            <style jsx>{`
        .sign-up-personal {
          border: 1px solid #000;
          background-color: var(--secondary, #cdc2a5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 158px 80px;
          font: 16px Anuphan, sans-serif;
        }
        .sign-up-container {
          background-color: var(--Grays-White, #fff);
          display: flex;
          width: 496px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding: 42px 80px 23px 20px;
        }
        .sign-up-title {
          color: #000;
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .sign-up-form {
          align-self: center;
          width: 324px;
          max-width: 100%;
          margin-top: 29px;
        }
        .action-container {
          display: flex;
          width: 199px;
          max-width: 100%;
          gap: 20px;
          justify-content: space-between;
          margin: 83px 0 0 62px;
        }
        .sign-in-link {
          color: #000;
          font-weight: 400;
          text-decoration: none;
          align-self: center;
        }
        @media (max-width: 991px) {
          .sign-up-personal {
            padding: 100px 20px;
          }
          .sign-up-container {
            padding-right: 20px;
          }
          .action-container {
            margin: 40px 0 0 10px;
          }
        }
      `}</style>
        </main>
    );
};

export default SignUpPage;