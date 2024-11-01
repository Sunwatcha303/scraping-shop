import React, { useState } from 'react';
import TabSet from './TabSet';
import FormInput from './FormInput';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setrole] = useState('user');
    const navigate = useNavigate(); // Initialize useNavigate

    const formInputs = [
        { label: 'Username', placeholder: 'Enter username.', value: username, setValue: setUsername },
        { label: 'Password', placeholder: 'Enter password.', value: password, setValue: setPassword }
    ];
    const handleSignIn = async (e) => {
        e.preventDefault();

        // Check if the passwords match before proceeding
        if (password === '') {
            alert("Passwords do not empty!");
            return;
        }

        // Prepare the data to be sent
        const data = {
            username,
            password,
            role,
        };
        // console.log(data)
        try {
            const response = await fetch('http://localhost:8080/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Sign-in failed');
            }

            // Handle successful sign-up (e.g., redirect to home)
            const responseData = await response.json();
            // console.log('Sign-in successful:', responseData);
            document.cookie = `token=${responseData.token}; path=/; max-age=3600;`; // expires in 1 hour
            alert('Sign-in successful! Redirecting to home...');

            // Redirect to home page
            navigate('/');

        } catch (error) {
            // Handle any errors
            console.error('Error during sign-in:', error);
            alert('Sign-in failed: ' + error.message);
        }
    }
    return (
        <main className="sign-in-container">
            <section className="sign-in-content">
                <h1 className="sign-in-title">Sign-in</h1>
                <TabSet />
                <form className="sign-in-form" onSubmit={handleSignIn}>
                    {formInputs.map((input, index) => (
                        <FormInput key={index} label={input.label} placeholder={input.placeholder} value={input.value} setValue={input.setValue} />
                    ))}
                    <a href="#" className="forgot-password">forgot password?</a>
                    <div className="sign-in-actions">
                        <Button text="Sign-in" primary />
                        <a href="/signup" className="sign-up-link">sign-up</a>
                    </div>
                </form>
            </section>
            <style>{`
        .sign-in-container {
          border: 1px solid #000;
          background-color: var(--secondary, #cdc2a5);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 158px 80px;
          font: 16px Anuphan, sans-serif;
        }
        .sign-in-content {
          background-color: var(--Grays-White, #fff);
          display: flex;
          width: 496px;
          max-width: 100%;
          flex-direction: column;
          align-items: flex-start;
          padding: 42px 80px 23px 20px;
        }
        .sign-in-title {
          color: #000;
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 6px;
        }
        .sign-in-form {
          align-self: center;
          display: flex;
          margin-top: 29px;
          width: 324px;
          max-width: 100%;
          flex-direction: column;
        }
        .forgot-password {
          color: var(--primary, #295f98);
          font-weight: 400;
          align-self: flex-end;
          margin-top: 16px;
          text-decoration: none;
        }
        .sign-in-actions {
          display: flex;
          width: 205px;
          max-width: 100%;
          gap: 20px;
          justify-content: space-between;
          margin: 268px 0 0 62px;
        }
        .sign-up-link {
          color: #000;
          font-weight: 400;
          text-decoration: none;
          margin: auto 0;
        }
        @media (max-width: 991px) {
          .sign-in-container {
            padding: 100px 20px;
          }
          .sign-in-content {
            padding-right: 20px;
          }
          .sign-in-actions {
            margin: 40px 0 0 10px;
          }
        }
      `}</style>
        </main>
    );
};

export default SignInPage;