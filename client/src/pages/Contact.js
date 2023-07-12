import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CONTACT_US } from '../utils/mutation'; // Assuming we have to build a mutation for contacting us...

const ContactUs = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [contactUs, { error, data }] = useMutation(CONTACT_US);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await contactUs({
        variables: { ...formState }
      });

      // Handle success if needed
    } catch (e) {
      console.error(e);
    }

    setFormState({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h3 className="card-header bg-dark text-light p-2">Contact Us</h3>
          <div className="card-body">
            {data ? (
              <p>
                Success! We will get back to you soon.{' '}
                <Link to="/">Back to homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <textarea
                  className="form-input"
                  placeholder="Your Message"
                  name="message"
                  rows="5"
                  value={formState.message}
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

export default ContactUs;