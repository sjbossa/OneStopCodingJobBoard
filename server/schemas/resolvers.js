const { AuthenticationError } = require('apollo-server-express');
const { Job, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find({});
    },
    job: async (parent, {jobId}) => {
      return Job.findOne({ _id: jobId });
    },
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
      createJob: async (parent, {title, description}) => {
        return await Job.create({title, description});
      },
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login:async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user with this email found!');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
  },
};

module.exports = resolvers;