const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Job {
    _id: ID
    title: String!
    description: String!
    maxExpectedSalary:Int!
    specification:String!
    minimumYearsRequired:Int!
    minimumEducationRequired:String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    jobs: [Job]
    job(jobId:ID!): Job
    users: [User]
    user(userId:ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    createJob(title:String! description:String!): Job
  }
`;

module.exports = typeDefs;
