const { gql } = require('apollo-server-express');

const typeDefs = gql`
    
    type JobSeeker{
        ID: ID!
        Name: String!
        Description: String
        ProfilePicture: String
        Age: Int
        Email: String!
        Password: String!
        PhoneNumber: String
        Address: String
        jobsAppliedTo: [JobPosted!]
        jobsViewed: [JobPosted!]
        Skills:[Skills!]
    }

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
    
    type Query{
        job(postingID: ID!): JobPosted!
        jobs: [JobPosted!]!
        company(Name: String!):Company
        companies:[Comapny!]!
        jobseeker(Name: String!): JobSeeker!
    }

    input createJobSeekerInput{
        Name: String!
        Email: String!
        Password: String!
    }

    input createCompanyInput{
        Name: String!
        ProfilePicture: String!
        ComapnyDescription: String!
        Address: String!
        Email: String!
        Password: String!
        PhoneNumber: String!
    }

    input createJobPostingInput{
        JobTitle: String!
        JobType: JobType = "FULLTIME"
        MinimumEductation:Education = "GED"
        Salary: Int = 0
        Shift: Shift = "Standard"
        DateCreated: Int!
        RemoteWork: Boolean!
        Industry: Industry = "Technology"
    }

    type Mutation
    {
        createJobSeeker(input: createJobSeekerInput):JobSeeker
        createCompany(input: createCompanyInput):Comapny
        createJobPosting(input: createJobPostingInput): JobPosted
        deleteJobPosting(postingID: ID!): JobPosted
    }
`;

module.exports = typeDefs;


