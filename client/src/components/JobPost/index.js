

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_JOB } from '../../utils/mutation';
import "./jobpost.css";
const JobForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [createJob, { loading, error }] = useMutation(CREATE_JOB);

  const handleSubmit = (e) => {
    e.preventDefault();

    createJob({
      variables: { title, description },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {

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
