import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../api';

function Register() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    error: false,
    message: '',
  });

  const history = useHistory();

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
    setErrors({
      error: false,
      message: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(user);
      if (response.status === 201) {
        history.push('/login');
      }
    } catch (error) {
      setErrors({
        error: true,
        message: error.response.data.message,
      });
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Logo
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Name
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </label>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
                <div className="flex flex-col items-start">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </label>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </label>
            </div>
            <div className="mt-4">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Confirm Password
                <div className="flex flex-col items-start">
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </label>
            </div>
            <div className="flex items-center justify-end mt-4">
              <a
                className="text-sm text-gray-600 underline hover:text-gray-900"
                href="/login"
              >
                Already registered?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-indigo-600 hover:bg-indigo-700 border border-transparent rounded-md active:g-indigo-900 false"
              >
                Register
              </button>
            </div>
          </form>
          {errors.error && (
            <div className="mt-4 text-red-600 font-bold text-center text-lg">
              {errors.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
