/*import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../utils/mutation';

const JobForm = () => {
  const [ formState, setFormState] = useState({
    title: "",
    description: "",
  });
  const [createJob, { error, data}] = useMutation(CREATE_JOB);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createJob({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Enter Title"
                  name="title"
                  type="text"
                  value={formState.title}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Enter Description"
                  name="description"
                  type="text"
                  value={formState.description}
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

export default JobForm*/

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../utils/mutation'; // Assuming you have defined the mutation in a separate file
import "./jobpost.css";
const JobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createJob, { loading, error }] = useMutation(CREATE_JOB);

  const handleSubmit = (e) => {
    e.preventDefault();

    createJob({
      variables: { title, description },
      // You can also provide an update function to handle the response data
      // update: (cache, { data: { createJob } }) => {
      //   // Handle cache updates if needed
      // },
    })
      .then((response) => {
        // Handle successful mutation
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description"></label>
        <input
          type="text"
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Creating Job...' : 'Create Job'}
      </button>
      {error && <p>Error: {error.message}</p>}
    </form>
  );
};

export default JobForm;