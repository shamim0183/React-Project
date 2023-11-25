// ForgotPasswordForm.js

import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:1337/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      console.log(response);

      if (response.ok) {
        setSuccessMessage('Password reset email sent successfully. Check your inbox.');
        setErrorMessage('');
      } else {
        const data = await response.json();
        setSuccessMessage('');
        setErrorMessage(`Password reset failed`, data);
      }
    } catch (error) {
      console.error('Error submitting forgot password:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input className='border rounded ml-4'
            type="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Sending Email...' : 'Reset Password'}
        </button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default ForgotPasswordForm;
