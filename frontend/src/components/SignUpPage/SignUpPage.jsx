import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TabSet from './TabSet';
import FormField from './FormField';
import CheckboxField from './CheckboxField';
import Button from './Button';

const SignUpPage = () => {
  const [displayAdmin, setDisplayAdmin] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Check if the passwords match before proceeding
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Prepare the data to be sent
    const data = {
      email,
      username,
      password,
      role,
    };
    // console.log(data)
    try {
      const response = await fetch('http://localhost:8080/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign-up failed');
      }

      // Handle successful sign-up (e.g., redirect to home)
      const responseData = await response.json();
      // console.log('Sign-up successful:', responseData);
      document.cookie = `token=${responseData.token}; path=/; max-age=3600;`; // expires in 1 hour
      alert('Sign-up successful! Redirecting to home...');

      // Redirect to home page
      navigate('/');

    } catch (error) {
      // Handle any errors
      console.error('Error during sign-up:', error);
      alert('Sign-up failed: ' + error.message);
    }
  };

  const formFields = [
    { label: 'Email', placeholder: 'Enter email.', value: email, setValue: setEmail },
    { label: 'Username', placeholder: 'Enter username.', value: username, setValue: setUsername },
    { label: 'Password', placeholder: 'Enter password.', value: password, setValue: setPassword },
    { label: 'Confirm Password', placeholder: 'Enter confirm password.', value: confirmPassword, setValue: setConfirmPassword },
  ];

  return (
    <main className="sign-up-personal">
      <section className="sign-up-container">
        <h1 className="sign-up-title">Sign-up</h1>
        <TabSet setDisplayAdmin={setDisplayAdmin} />
        <form className="sign-up-form" onSubmit={handleSignUp}>
          {formFields.map((field, index) => (
            <FormField key={index} label={field.label} placeholder={field.placeholder} value={field.value} setValue={field.setValue} />
          ))}
          {/* <CheckboxField label="I agree to the terms." checked={agreeToTerms} setChecked={setAgreeToTerms} /> */}
          <div className="action-container">
            <Button primary type="submit">Sign-up</Button>
            <a href="/signin" className="sign-in-link">Sign-in</a>
          </div>
        </form>
      </section>
      <style>{`
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