import { useState } from 'react';
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod"

// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input"

// const formSchema = z.object({
//   username: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// })

const SignUpFrom = () => {

  // 1. Define your form.
  // const form = useForm < z.infer < typeof formSchema >> ({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     name: '',
  //     email: '',
  //     password: '',
  //   },
  // })
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
  // 2. Define a submit handler.
  // async function onSubmit() {
  //   try {
  //     setLoading(true);

  //     const response = await fetch('http://localhost:1337/api/auth/local/register', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     console.log(response.status);  // Log the HTTP status code

  //     if (response.ok) {
  //       console.log('Registration successful!');
  //       // Handle success, such as redirecting the user to a login page
  //     } else {
  //       const data = await response.json();
  //       console.log(data);
  //       console.error('Registration failed:', data);
  //       // Handle failure, such as displaying an error message to the user
  //     }
  //   } catch (error) {
  //     console.error('Error submitting registration:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          <input className='border rounded ml-4' type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input className='border rounded ml-4' type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input className='border rounded ml-4' type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
        {/* Login Link Button */}
        <p className="text-small-regular text-light-2 text-center mt-2">
          Already have an account?
          <Link to='/sign-in' className="text-blue-500 text-small-semibold ml-1">Log in</Link>
        </p>
      </form>
    </>
  );
};


export default SignUpFrom;
