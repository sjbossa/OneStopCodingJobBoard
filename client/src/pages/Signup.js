import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Signup.css";
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutation';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { data } = await addUser({
          variables: { ...formState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    return (
      <main className="flex-row justify-center mb-4">
        <div className="col-12 col-lg-10">
          <div className="card">
            <h3 className="card-header bg-dark text-light p-2">Sign Up</h3>
            <div className="card-body">
              {data ? (
                <p>
                  Success! You may now head{' '}
                  <Link to="/">back to the homepage.</Link>
                </p>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <input
                    className="signup-input"
                    placeholder="Your username"
                    name="username"
                    type="text"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <input
                    className="signup-input"
                    placeholder="Your email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                  <input
                    className="signup-input"
                    placeholder="******"
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                  <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                  >
                    Submit
                  </button>
                </form>
              )}
  
              {error && (
                <div className="my-3 p-3 bg-danger text-white">
                  {error.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default Signup;
  
  