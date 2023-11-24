import { useState } from 'react';
import { Link } from "react-router-dom";

// src/components/RegistrationForm.js

import axios from "axios";

const SignUpFrom = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log(response.status);  // Log the HTTP status code

      if (response.ok) {
        console.log('Registration successful!');
        // Handle success, such as redirecting the user to a login page
      } else {
        const data = await response.json();
        console.log(data);
        console.error('Registration failed:', data);
        // Handle failure, such as displaying an error message to the user
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(`${name}: ${value}`);
  };


  return (
    <>
      <div className="text-black">
        <div className="font-semibold mb-4">SignUpForm</div>
        <Link to='/' className="p-3 bg-red-400 rounded font-semibold">Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </>
  );
};


export default SignUpFrom;
