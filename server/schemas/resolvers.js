const { Company, JobPosted, JobSeeker } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        job: async (parent, {jobId}) =>{
            return JobPosted.findOne({ postingID: jobId });
        },

        jobs: async() =>{
            return JobPosted.find();
        },

        company:  async(parent, {companyId}) =>{
            return Company.findOne({ comapnyID: companyId });
        },
        companies:  async() =>{
            return Company.find();
        },
        JobSeeker:  async(parent, {jobSeekerId}) =>{
            return JobSeeker.findOne({ ID: jobSeekerId });
        },
    },
    Mutation: {

    },
};

module.exports = resolvers;