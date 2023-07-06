const { User,  Job } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        user: async (parent, { isCompany, name}) => {
            return User.findOne({isCompany, name});
        },
        job: async (parent, { title}) => {
            return Job.findOne({title: title});
        },
        jobs: async () => {
            return Job.find();
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id });
              }
              throw new AuthenticationError('You need to be logged in!');
        },
    },
    Mutation: {
        createUser: async (parent, { name, isCompany, password, email }) => {
            const user = await User.create({ name, password, isCompany, email });
            const token = signToken(user);
      
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw new AuthenticationError('No profile with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
        },
        createJob: async (parent, { title, description }) => {
            const job = await Job.create({ title, description });
            return job;
        },
        deleteUser: async (parent, args, context) => {
            if (context.user) {
              return User.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        deleteJob: async (parent, args, context) => {
            if (context.user) {
              return Job.findOneAndDelete({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
        },

    },
};

module.exports = resolvers;     