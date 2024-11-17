"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import { useRouter } from 'next/router';

export default function SignUp() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event :any) => {
    event.preventDefault(); 
    setError('');

    const formData = new FormData(event.target);
    const signupData = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
  console.log("signup data ",  signupData);

  
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      if (response.ok) {
        router.push('/dashboard');
      } else {
        const data = await response.json();
        setError(data.message || 'An error occurred during signup.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen flex flex-col bg-gray-50 items-center justify-center'>
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">Register now</h2>
          <p className="text-sm text-gray-600 mt-2">
            Enter your credentials to create your account
          </p>
        </div>
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-950 focus:border-green-950"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-950 focus:border-red-950"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-950 focus:border-red-950"
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-950 text-white py-2 rounded-lg hover:bg-green-900n">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}