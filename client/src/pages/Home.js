import React from 'react';
import { useQuery } from '@apollo/client';

import jobCard from '../components/jobCard';

import { QUERY_JOBS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_JOBS);
  const jobs = data?.profiles || [];

  return (
    <main>
      <div >
        <div >
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
