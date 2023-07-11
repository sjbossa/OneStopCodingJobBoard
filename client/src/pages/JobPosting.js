import React from 'react';

import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_JOB } from '../utils/queries';



const JobPosting = () => {
  const { _id } = useParams();

  const { loading, data } = useQuery(QUERY_JOB,
    {
      variables: { _id: _id },
    }
  );

  const job =  data?.profile || {};
  console.log(job);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>{job._id}</h1>
        <h1>{job.description}</h1>
        <h1>{job.title}</h1>
    </div>
  );
};

export default JobPosting;
