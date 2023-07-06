const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type User{
        _id: ID!
        isCompany:Boolean!
        name:String!
        email:String!
        password:String
    }
    
    type Job{
        _id: ID!
        title:String!
        description:String!
    }
   
    type Auth {
        token: ID!
        profile: User
    }

   type Query{
        user(isCompany: Boolean!,  name:String!):User
        job(_id: ID!):Job
        jobs:[Job!]
        me:User
    }
    
    type Mutation
    {
        createUser(name:String!, isCompany:Boolean!, password:String!, email:String!): Auth
        login(email: String!, password:String! ): Auth

        createJob(title:String!, description: String!): Job
        deleteUser(id: ID!): User
        deleteJob(id: ID!):Job
    }
`;

module.exports = typeDefs;

/*
    type Company{
        companyID: ID!
        Name: String!
        ProfilePicture: String!
        ComapnyDescription: String!
        Address: String!
        Email: String!
        Password: String!
        PhoneNumber: String!
        Postings: [JobPosted!]

    }

    type Skills{
        filler: String
    }

    type JobPosted{
        postingID: ID!
        JobTitle: String!
        JobType: JobType!
        Skills:[Skills!]
        MinimumEductation:Education
        Salary: Int
        Shift: Shift!
        DateCreated: Int!
        RemoteWork: Boolean!
        Industry: Industry!
    }

    enum JobType{
        FULLTIME
        PARTTIME
        INTERNSHIP
    }

    enum Education{
        GED
        SomeCollege
        Associates
        Bachelors
        Masters
    }
    enum Shift{
        Split_shift
        Morning_shift
        Afternoon_shift
        Evening_shift
        Fixed_schedule
        Flexible schedule
        On_call
        Freelance
        Rotating_schedule
        Alternative_schedule
        Flex
        Standard
    }
    enum Industry{
        Technology
        Fintech
        Artificial_Intelligence
        Computers_and_Information_Technology
        Telecommunications
        Information_Technology_Consulting
        Software
        Industrial_Technology
        Environmental_Technology
        Computer_Security
        Aerospace
    }
    
*/

