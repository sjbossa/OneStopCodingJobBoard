import React from 'react';

import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../utils/queries';
import JobCard from '../components/Card';
import JobForm from '../components/JobPost';

const Main = () =>{
    const { loading, data } = useQuery(QUERY_JOBS);
    const jobs = data?.jobs || [];
    console.log(jobs);

    return(    
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                <div
                className="col-12 col-md-10 mb-3 p-3"
                style={{ border: '1px dotted #1a1a1a' }}
                >
                <JobForm />
                </div>
                {loading ? (
                <div>Loading...</div>
                ) : (
                <JobCard
                jobs={jobs}
                title="Here's the current job postings..."
                />
                )}
                </div>
            </div>
        </main>
    );
};
export default Main;