const { Job, User } = require('../models');

const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.find({});
    },
    job: async (parent, args) => {
      return await Job.findById(args.id);
    },
    users: async () => {
      return await User.find({});
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