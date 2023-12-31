import React from 'react';
import './Signup.css';
import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../utils/queries';
import JobCard from '../components/Card';

const Main = () =>{
    const { loading, data } = useQuery(QUERY_JOBS);
    const jobs = data?.jobs || [];

    return(    
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                <div className="col-12 col-md-10 mb-3 p-3"
                >
                </div>
                {loading ? (
                <div>Loading...</div>
                ) : (
                <JobCard
                jobs={jobs}
                title="Here are the current job postings..."
                />
                )}
                </div>
            </div>
        </main>
    );
};
export default Main;