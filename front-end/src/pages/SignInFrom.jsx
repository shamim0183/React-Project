import { Link, useNavigate } from "react-router-dom";
// SignInForm.js

import React, { useState } from 'react';

const SignInForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:1337/api/auth/local', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response.status);  // Log the HTTP status code

      if (response.ok) {
        console.log('Login successful!');

        navigate('/');
        // Handle success, such as updating user state or redirecting
      } else {
        const data = await response.json();
        console.error('Login failed:', data);
        // Handle failure, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error submitting login:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-black mb-4">
        <div className="font-semibold mb-4">SignInFrom</div>
        <Link to='/' className="p-3 bg-red-400 rounded font-semibold">Home</Link>
      </div>
      <div>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email or Username:
            <input className='border rounded ml-4'
              type="text"
              name="identifier"
              value={formData.identifier}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input className='border rounded ml-4'
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          <p>Forgot password? Click<Link to={'/fogot-password'} className="text-blue-500 text-small-semibold ml-1">Here</Link></p>
          <p className="text-small-regular text-light-2 text-center mt-2">
            Don't have an account?
            <Link to='/sign-up' className="text-blue-500 text-small-semibold ml-1">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignInForm;