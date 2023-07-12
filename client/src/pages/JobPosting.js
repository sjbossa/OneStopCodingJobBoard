import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_JOB } from '../utils/queries';



const JobPosting = () => {
  const { jobId } = useParams();

  const { loading, data } = useQuery(QUERY_JOB,
    {
      variables: { jobId: jobId },
    }
  );

  const job =  data?.job || {};
  console.log(job);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
  <div>
    <h1>{job.description}</h1>
    <h1>{job.title}</h1>
    <button>apply now</button>
  </div>
  );
};

export default JobPosting;
