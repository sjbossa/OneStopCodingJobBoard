import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import "./Signup.css"
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
    <img src={require('./images/45.jpg')} alt="Logo" />
    <h2>{job.title}</h2>
    <h2>{job.description}</h2>
    <h2>{job._id}</h2>
    <button
  className="btn btn-block btn-info"
  style={{ cursor: 'pointer' }}
  type="submit"
>
  Apply Now!
</button>
  </div>
  );
};

export default JobPosting;
